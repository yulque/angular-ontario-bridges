const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const bridgeRouter = require('./routes/bridges');

const app = express();

app.use(cors()); // header will be added before anything, globally
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', bridgeRouter);

module.exports = app;
