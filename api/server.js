const express = require('express');
const morgan = require('morgan');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found'})
});

server.get('/', (req, res) => {
    res.send('The API is running')
});

module.exports = server;
