const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const authenticate = require('../auth/authenticate-middleware.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
  });


module.exports = server;