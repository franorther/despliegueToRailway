const express = require('express');
const router = express.Router()
const userRoute = require('./userRoute');
const spaRouter = require('./spaRouter');

router.use('/', userRoute)
router.use('/', spaRouter)

module.exports = router;