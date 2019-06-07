const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet())

server.get('/', (req, res) => {
    res.send(`<h1>I hear ya, loud n' clear!</h1>`)
})

module.exports = server;