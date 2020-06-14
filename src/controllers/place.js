const mongoose = require('mongoose');
const Place = mongoose.model('Place');

exports.homePage = (req, res, next) => {
        let data = [];
        res.status(200).send(data);
};

// exports.getAnimaisFiltrados = (req, res, next) => {
//     const especie = req.query.especie;
//     const genero = req.query.genero;
// 
//     let filter = {};
// 
//     if (especie) filter["especie"] = especie;
//     if (genero) filter["genero"] = genero;
// 
//     Animal
//         .find(filter)
//         .then(data => {
//             res.status(200).send(data);
//         }).catch(e => {
//             res.status(400).send(e);
//         });
// };

