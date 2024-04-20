const express = require('express');
const userRouter = express.Router()

userRouter.get('/saludo-user', (req, res) => {
    res.send("Hola Desde userRouter");
});

module.exports = userRouter;