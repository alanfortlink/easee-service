const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorModel = new Schema({
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    humidity: {
        type: Number,
        required: true,
        trim: true
    },
    luminosity: {
        type: Number,
        required: true,
        trim: true
    },
    source: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('SensorData', sensorModel);
