const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Configure mongoose
const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const uri = process.env.MONGODB_URI;

// Connect to mongoose
mongoose.connect(uri, config);

// Load models.
const SensorData = require('./models/sensor_data');

// Loading routes.
const sensorRoutes = require('./routes/sensor_data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/sensor', sensorRoutes);

module.exports = app;
