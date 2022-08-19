import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.todoDb')

export function createDatabase () {
  db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, text TEXT, created TEXT, status INTEGER, updated TEXT)',
        [],
        () => console.log("database created"),
        error => console.log('error')
      )
    })
}

export function insertIntoTable(props){
  const created = new Date().getDate() + "."+ new Date().getMonth() + "." + new Date().getFullYear();

  db.transaction(tx => {
    tx.executeSql('INSERT INTO items (id,text, created, status, updated) values (?, ?, ?, ?, ?)', 
[Date.now(), props.text, created, 0, null],
(sqlTnx, res) => console.log(res),
error => console.log('error'))
  })
}

export function deleteFromTable(props){
  db.transaction(tx => {
    tx.executeSql('DELETE FROM items WHERE id = ?', 
[props.id],
(sqlTnx, res) => console.log(res),
error => console.log('error'))
  })
}

export function editItem(props){
  const updated = new Date().getDate() + "."+ new Date().getMonth() + "." + new Date().getFullYear()
  db.transaction(tx => {
    tx.executeSql('UPDATE items SET updated = ?, status = ?, text = ? WHERE id = ?',
[updated, props.status, props.text, props.id],
(sqlTnx, res) => console.log(res),
error => console.log('error'))
  })
}

export function deleteAllItemsDB(){
  db.transaction(tx => {
    tx.executeSql('DELETE FROM items',
[],
(sqlTnx, res) => console.log(res),
error => console.log('error'))
  })
}