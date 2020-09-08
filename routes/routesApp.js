const express = require('express');
const api = express.Router();
const path = require('path');
const reqPath = path.join(__dirname, '../');

//Routes...
api.get('/', (req, res) => {
    res.sendFile(reqPath+'views/index.html');
});

module.exports = api;