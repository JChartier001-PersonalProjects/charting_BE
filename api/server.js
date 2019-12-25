const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const authenticate = require('../auth/auth-middleware.js');
const userRouter = require('../routers/user/user-router.js')


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth', authRouter);
server.use('/api', authenticate, userRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
  });


module.exports = server;