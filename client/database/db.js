import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase({name: 'todolist.db'});

export const createDatabase = () => {
db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS todo (id BIGINT PRIMARY KEY, text TEXT, created DATE, status INTEGER, updated DATE)',
    )
  })
  console.log("table created")
}

export const newItem = (item) => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO todo (id, text, created, status, updated) values (?, ?, ?, ?, ?)', [item.id, item.text, item.created, 0, null], (sqlTnx, res) => {
      })
    })
  }

  export const updateItem = (item) => {
    db.transaction(tx => {
      tx.executeSql('UPDATE todo SET status = ?, created = ?, updated = ?, text = ? WHERE id = ?', [item.status, item.created, item.updated, item.text, item.id], (sqlTnx, res) => {
        console.log(sqlTnx, res)
      })
    })
  }

  export const deleteItem = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM todos WHERE id = ?', [id], (sqlTnx, res) => {
        console.log(sqlTnx, res)
      })
    })
  }

  export const getAllItems = () => {
    return db.transaction(tx => {
      tx.executeSql('SELECT * FROM todo', [], 
        (tx, results) => {
          let temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          console.log(temp);
        })
    })
  }