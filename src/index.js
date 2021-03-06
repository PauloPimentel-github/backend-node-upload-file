require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

/**
 * Database setup
 */
mongoose.connect(
    process.env.MONGO_URL, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));

app.use(require('./routes'));
 
const port = process.env.port||3000

app.listen(port);