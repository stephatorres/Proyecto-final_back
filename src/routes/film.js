const express = require('express');
const filmSchema = require("../models/film");

const router = express.Router();


//Agregar pelicula
router.post('/films', (req, res) =>{
    const film = filmSchema(req.body);
    film
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Traer todas las peliculas
router.get('/films', (req, res) =>{
    filmSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

//Traer una pelicula
router.get('/films/:id', (req, res) =>{
    const { id } = req.params;
    filmSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Actualizar una pelicula
router.put('/films/:id', (req, res) =>{
    const { id } = req.params;
    const { nombre, calificacion, imagen, director, fechaEstreno, tiempoDuracion, genero, distribuidor } = req.body;
    filmSchema
        .updateOne({_id: id },{$set: {nombre, calificacion, imagen, director, fechaEstreno, tiempoDuracion, genero, distribuidor}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Borrar una pelicula
router.put('/films/:id', (req, res) =>{
    const { id } = req.params;
    filmSchema
        .remove({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


module.exports = router;