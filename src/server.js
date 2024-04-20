const express = require('express');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const { PORT } = process.env

app.use("/api", routes)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} ✨`);
})