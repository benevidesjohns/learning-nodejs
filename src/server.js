const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Commented lines of code to give example with knex
// const sqlite = require('sqlite3').verbose();
// 
// let db = new sqlite.Database('db.sqlitenpm d', (error) => {
//     if(error){
//         return console.error(error.message);
//     }
//     console.log('Conectado com sucesso!');
// })

app.use(routes);

app.listen(3001);