function getLatitude() {
    const diff = Math.random() * 0.3;
    return -23.533773 + diff;
}

function getLongitude() {
    const diff = Math.random() * 0.3;
    return -46.625290 + diff;
}

function getPrice() {
    return parseInt((Math.random() * 5));
}

const _allPlaces = [{
        name: "KM 28 - Campeão - São Paulo - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "KM 34 - Caieiras - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Posto Campeão - KM 38 - Cajamar - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Praça de Pedágio de Campo Limpo - KM 39 - Caieiras - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Frango Assado - KM 44 - Cajamar - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "KM 56 - Jundiaí - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Graal 56 - KM 56 - Jundiaí - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Lago Azul - KM 58 - Jundiaí - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Lago Azul - KM 64 - Jundiaí - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Campeão - KM 68 - Jundiaí - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Posto Campeão - KM 68 - Jundiaí - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Jaal - KM 71 - Itupeva - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Serra Azul - KM 71 - Itupeva - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Campeão - KM 80 - Campinas - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "PGF 117 - KM 117 - Sumaré - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Graal 125 Norte - KM 125 - Santa Bárbara D'Oeste - Norte",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
    {
        name: "Graal 125 Sul - KM 125 - Santa Bárbara D'Oeste - Sul",
        latitude: getLatitude(),
        longitude: getLongitude(),
        price: getPrice(),
    },
];

function rand() {
    return parseInt(Math.random() * 6);
}

exports.allPlaces = _allPlaces;

exports.getAllReviews = function(allPlaces) {

    return [{
            driverId: "0",
            placeId: allPlaces[0]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[1]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[2]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 2,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[3]._id,
            ratings: [{
                type: 2,
                rating: rand()
            }, {
                type: 5,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[4]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[5]._id,
            ratings: [{
                type: 7,
                rating: rand()
            }, {
                type: 2,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[6]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[7]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[8]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[9]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[10]._id,
            ratings: [{
                type: 2,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[11]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[12]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[13]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[14]._id,
            ratings: [{
                type: 5,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[15]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
        {
            driverId: "0",
            placeId: allPlaces[16]._id,
            ratings: [{
                type: 3,
                rating: rand()
            }, {
                type: 6,
                rating: rand()
            }, {
                type: 4,
                rating: rand()
            }, {
                type: 7,
                rating: rand()
            }, {
                type: 1,
                rating: rand()
            }]
        },
    ];
};
