var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydatabase.db', (err) => { if
     (err) { console.error(err.message); } else {
         console.log('Connected to the SQLite database.'); } });