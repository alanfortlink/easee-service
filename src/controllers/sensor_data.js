const mongoose = require('mongoose');
const SensorData = mongoose.model('SensorData');

exports.addSensorData = (req, res, next) => {
        const sensorData = {
                temperature: req.body.temperature,
                humidity: req.body.humidity,
                luminosity: req.body.luminosity,
                source: req.body.source
        };
        SensorData.insertMany([sensorData], (err, docs) => {
                res.status(201).send(docs[0]);
        });
};

exports.getSensorData = (req, res, next) => {
        SensorData.find({ source: req.params.source }).sort({created_at: -1}).exec(
                (err, items) => {
                        if(items.length == 0){
                                res.status(200).send(req.params.source);
                        }else{
                                res.status(200).send([items[0]]);
                        }
                }
        );
};
