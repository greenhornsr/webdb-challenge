const express = require('express');
const helmet = require('helmet');
const projects = require('./resources/projectsRouter');

const server = express();

server.use(helmet())
server.use('/api', logger, projects)

server.get('/', (req, res) => {
    res.send(`<h1>I hear ya, loud n' clear!</h1>`)
})

// logger middleware
function logger(req, res, next) {
    console.log(`\n${req.method} request to route ${req.url} at [${new Date().toISOString()}]\n`);
    next();
}

module.exports = server;