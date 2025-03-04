'use strict';
const express = require('express');
//constants
const PORT = 5000;
const HOST = '0.0.0.0'

//app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World from Docker!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);