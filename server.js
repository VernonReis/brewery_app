// DEPENDENCIES
const express    = require('express');
const session    = require('express-session');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const app        = express();

const breweryController = require('./controllers/brewery.js');

require('pretty-error').start();

// CONFIG
const PORT       = process.env.PORT || 3000;
const mongoURI   = process.env.MONGODB_URI || 'mongodb://localhost/breweries'

// DB
mongoose.connect(mongoURI, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

// CONTROLLERS


// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use('/brewery', breweryController);


// LISTEN
app.listen(PORT, () => console.log('Breweries App is running on port: ', PORT));
