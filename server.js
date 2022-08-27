const express = require('express');

const app = express();
app.use(express.json());

// Example with get method
// app.get("/users", (req, res) => {
//     res.json({
//         name: "John",
//         age: "21",
//         company: "UESB"
//     })
// });
    
// Example with post method
// app.post("/users", (req, res) => {
//     res.json({
//         name: "John",
//         age: "21",
//         company: "UESB"
//     })
// });

// Example using query
app.get("/users", (req, res) => {
    const params = req.query;
    console.log(params);
    res.json(params)
});

// Example using params
app.post("/users/:id", (req, res) => {
    const params = req.params;
    console.log(params);
    res.json(params)
});

// Example using body
app.post("/users", (req, res) => {
    const params = req.body;
    console.log(params);
    res.json(params)
});

app.listen(3001);