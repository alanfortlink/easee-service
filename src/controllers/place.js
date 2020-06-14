const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const Review = mongoose.model('Review');

let Service2Type = {
    "wifi": 1,
    "estacionamento": 2,
    "comida": 3,
    "seguranca": 4,
    "preco": 5,
};

let Type2Service = {};
for (service in Service2Type) Type2Service[Service2Type[service]] = service;

function getDistance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344
        }
        if (unit == "N") {
            dist = dist * 0.8684
        }
        return dist;
    }
}

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

            const distance = getDistance(place.latitude, place.longitude, origin.latitude, origin.longitude, 'K');

            let accByService = {};
            let totalByService = {};

            reviews.forEach((review) => {
                review.ratings.forEach((rating) => {
                    if (!accByService[rating.type])
                        accByService[rating.type] = 0;
                    if (!totalByService[rating.type])
                        totalByService[rating.type] = 0;

                    accByService[rating.type] += rating.rating;
                    totalByService[rating.type] += 1;
                });
            });

            let services = [];

            for (type in accByService) {
                services.push({
                    type: type,
                    name: Type2Service[type],
                    rating: accByService[type] / totalByService[type]
                });
            }

            const rating = services.map(s => s.rating).reduce((a, b) => a + b, 0) /
                services.length;

            const numEvaluations = reviews.length;

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
                price: place.price,
                numEvaluations,
                services,
                metadata,
            };

            if (places != null) places.push(processedItem);
            resolve(processedItem);
        }, (err) => {
            reject(err);
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
                name: "Loja 1",
                latitude: 1.0,
                longitude: 2.0,
                price: 5,
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

            Review.insertMany([{
                driverId: "0",
                placeId: places[0]._id,
                ratings: [{
                    type: 1,
                    rating: 4
                }, {
                    type: 2,
                    rating: 4
                }, {
                    type: 3,
                    rating: 3
                }, {
                    type: 4,
                    rating: 3
                }, {
                    type: 5,
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
