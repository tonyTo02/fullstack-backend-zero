const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/view-engine.js');
const webRoute = require('./routes/web.js');

const app = express();

app.use('/', webRoute);
// console.log(">>>Check env: ", process.env);
const port = process.env.PORT || 8888;

configViewEngine(app);

app.listen(port, () => {
    console.log(`Sever listen on port ${port}...`);
})