const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeModel = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true,
        trim: true
    },
    longitude: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Place', placeModel);
