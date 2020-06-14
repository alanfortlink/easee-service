const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverModel = new Schema({
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Driver', driverModel);
