const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
});

const reviewModel = new Schema({
    driverId: {
        type: String,
        required: true,
        trim: true
    },
    placeId: {
        type: String,
        required: true,
        trim: true
    },
    ratings: [ratingSchema]
});

module.exports = mongoose.model('Review', reviewModel);
