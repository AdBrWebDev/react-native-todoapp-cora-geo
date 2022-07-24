const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mysql = require('mysql');
//require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const rounds = 10;
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const bcrypt = require('bcrypt');

//const myKey = crypto.randomBytes(64).toString('hex');


const dbcon = mysql.createPool({
    host: '192.168.0.155',
    user: 'root',
    password: '',
    database: 'todoapp',
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

/*app.use(cors({
    origin: "http://localhost:19002",
    methods: ['GET', 'POST'], 
    credentials: true
}));*/

app.post('/login', function(req, res){
    const {username, password} = req.body;

    dbcon.query("SELECT * FROM users WHERE name = ?", [username], (err, result) => {
        if(err){
            res.send({err: err})
        }
        if(result.length > 0){
            console.log(result)
            const valid = bcrypt.compare(password, result[0].password)
                if(valid){
                    res.send(result)
                    console.log("successfully logged in")
                }else{
                    console.log("wrong password")
                    res.send({message: "Nesprávny e-mail alebo heslo!"})
                }
        }else{
            res.send({message: "Užívatel neexistuje!"})
        }
    });
})

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, rounds, (err, hash) => {
        if(err){
            console.log(err)
        }
        dbcon.query("SELECT * FROM users WHERE name = ?", [req.body.username], (err, result) => {
            console.log(result)
            if(result.length > 0){
                res.send({message: "Užívateľ už existuje!"})
            }else if(result.length === 0){
                dbcon.query("INSERT INTO users (id, name, password) VALUES(?,?,?)", 
            ['', req.body.username, hash]);
            res.send({message: "Registrácia bola úspešná"})
            }
        })
    })
})

app.post('/sendTodo', (req, res) => {
    /*const {userId, name} = req.body;

    const user = {
        name: name,
        userId: userId
    }

    const token = jwt.sign({user}, "secretkey", (err, token) => {
        res.json({token})
    });

    console.log(token)*/

    dbcon.query('INSERT INTO todos (id, text,status,date, token) VALUES (?,?,?,?, ?)', ['', req.body.text, 0, new Date(), ''], (err, result) => {
        res.send(result)
    })
})

app.post('/deleteTodo', (req, res) => {
    dbcon.query('DELETE FROM todos WHERE id = ?', [req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/editTodo', (req, res) => {
    dbcon.query('UPDATE todos SET text = ?, status = ?, date = ? WHERE id = ?', [req.body.text, req.body.status, new Date(), req.body.id,], (err, result) => {
})
})

app.get('/getTodos', (req, res) => {
    dbcon.query('SELECT * FROM todos', (err, result) => {
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })