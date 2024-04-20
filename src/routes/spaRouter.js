const express = require('express');
const spaRouter = express.Router();
const path = require('path');

spaRouter.use(express.static(path.join(__dirname, '../public/templatemo_559_zay_shop')));
spaRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templatemo_559_zay_shop', 'index.html'))
})

module.exports = spaRouter;