const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

// // Example using query
// routes.get("/users", (req, res) => {
//     const params = req.query;
//     console.log(params);
//     res.json(params)
// });

// // Example using params
// routes.post("/users/:id", (req, res) => {
//     const params = req.params;
//     console.log(params);
//     res.json(params)
// });

// Example using body
routes.post("/users", async (req, res) => {
    // Using example with concept of desestructuring
    const {name, email, age, company} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        name,
        email,
        age,
        company
    })
    res.json({id});
});

routes.get("/users", async (req, res) => {
    const users = await connection('users').select('*');
    res.json(users);
})

module.exports = routes;