const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connect to mongoose
mongoose.connect('mongodb+srv://usuario:senha@cluster0-gmkmt.mongodb.net/test?retryWrites=true&w=majority');

// Load models.
const Driver = require('./models/driver');
const Place = require('./models/place');

// Loading routes.
const placeRoutes = require ('./routes/place');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/places', placeRoutes);

module.exports = app;
