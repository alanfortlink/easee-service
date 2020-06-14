const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const Review = mongoose.model('Review');

function getProcessedPlace(place, places, origin) {
    return new Promise((resolve, reject) => {
        Review.find({
            placeId: place._id
        }, (err, reviews) => {
            if (err) {
                reject(err);
                return;
            }

            if (reviews == null) reviews = [];

            //TODO: Calculate distance
            const distance = 0;
            //TODO: Calculate rating from reviews accumulation
            const rating = 0;
            //TODO: Calculate price
            const price = 0;
            //TODO: Calculate rating from reviews accumulation
            const numEvaluations = reviews.length;
            //TODO: Calculate rating from reviews accumulation
            const services = [{
                id: 1,
                name: "Wifi",
                rating: 4
            }, {
                id: 2,
                name: "Estacionamento",
                rating: 4
            }, {
                id: 3,
                name: "Banho",
                rating: 4
            }];

            const metadata = [{
                message: "Para detalhes: ",
                link: "http://www.google.com",
                caption: "Clique aqui"
            }];

            let processedItem = {
                id: place._id,
                name: place.name,
                distance: distance,
                latitude: place.latitude,
                longitude: place.longitude,
                rating,
                price,
                numEvaluations,
                services,
                metadata,
            };

            if (places != null) places.push(processedItem);
            resolve(processedItem);
        }, (err) => {
            //TODO: Handle error.
        });
    });
}

function getProcessedPlaces(data, origin) {
    return new Promise((resolve, reject) => {
        let promises = [];

        let places = [];
        data.forEach((place) => {
            promises.push(getProcessedPlace(place, places, origin));
        });

        Promise.all(promises).then(() => {
            resolve(places);
        });
    });
}

exports.listPlaces = (req, res, next) => {
    let origin = {
        latitude: 0,
        longitude: 0
    };

    Place
        .find({})
        .then((data) => {
            getProcessedPlaces(data, origin).then((processedData) => {
                res.status(200).send(processedData);
            }, (err) => {
                res.status(500).send({
                    "error": err
                });
            });
        }, (e) => {
            res.status(500).send({
                error: e
            });
        });
};

exports.listPlace = (req, res, next) => {
    const placeId = req.params.id;

    let origin = {
        latitude: 0,
        longitude: 0
    };

    Place
        .findById(placeId,
            (err, place) => {
                if (err) {
                    // Place does NOT exist.
                    res.status(500).send({
                        "error": err
                    });
                    return;
                }

                if (!place) {
                    // Place does NOT exist.
                    res.status(200).send(null);
                    return;
                }
                getProcessedPlace(place, null, origin).then((processedPlace) => {
                    res.status(200).send(processedPlace);
                }, (err) => {
                    res.status(500).send({
                        "error": err
                    });
                });
            });
};

function resetPlaces() {
    return new Promise((resolve, reject) => {
        Place.deleteMany({}, () => {
            Place.insertMany([{
                "name": "Loja 1",
                "latitude": 1.0,
                "longitude": 2.0
            }], (err, places) => {
                if (err) reject(err);
                resolve(places);
            }, (err) => {
                reject(err);
            });
        }, (err) => {
            reject(err);
        });
    });
}

function resetReviews(places) {
    return new Promise((resolve, reject) => {
        Review.deleteMany({}, (err, _) => {
            if (err) {
                reject(err);
                return;
            }

            //TODO: Change 0 to a real driver's id.
            Review.insertMany([{
                driverId: "0",
                placeId: places[0]._id,
                ratings: [{
                    id: 1,
                    rating: 4
                }, {
                    id: 2,
                    rating: 4
                }, {
                    id: 3,
                    rating: 3
                }, {
                    id: 4,
                    rating: 3
                }, {
                    id: 5,
                    rating: 5
                }],
            }], (err, reviews) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(reviews);
            }, (err) => {
                reject(err);
            });
        });
    });
}

exports.reset = (req, res, next) => {
    resetPlaces().then((places) => {
        resetReviews(places).then((reviews) => {
            res.status(200).send({
                "status": true,
                "places": places,
                "reviews": reviews
            });
        }, (err) => {
            res.status(500).send({
                "error": err
            });
        });
    }, (err) => {
        res.status(500).send({
            "error": err
        });
    });
};

exports.rate = (req, res, next) => {
    const placeId = req.body.placeId;
    const driverId = req.body.driverId;
    const ratings = req.body.ratings;

    //TODO: There must be a insertOne
    Review.insertMany([{
        placeId,
        driverId,
        ratings
    }], (err, reviews) => {
        if (err) {
            res.status(500).send({
                "error": err
            });
        } else {
            res.status(200).send({
                "status": true,
                "review": reviews[0]
            });
        }
    });
};
