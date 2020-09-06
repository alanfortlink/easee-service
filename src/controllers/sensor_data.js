const mongoose = require('mongoose');
const DB = require('../models/db');
const SensorData = mongoose.model('SensorData');

exports.addSensorData = (req, res, next) => {
        SensorData.insertMany([req.body.sensorData], (err, docs) => {
                res.status(201).send(docs[0]);
        });
};

exports.getSensorData = (req, res, next) => {
        SensorData.find({ source: req.params.source }).sort({created_at: -1}).execFind(
                (err, items) => {
                        res.status(200).send(items);
                }
        );
};
