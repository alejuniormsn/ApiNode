require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('../../routes');

const app = express();

app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(routes);

module.exports = app;