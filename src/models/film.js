const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    calificacion:{
        required: false,
        type: String
    },
    imagen:{
        required: false,
        type: String
    },
    director:{
        required: false,
        type: String
    },
    fechaEstreno:{
        required: false,
        type: String
    },
    tiempoDuracion:{
        required: false,
        type: String
    },
    genero:{
        required: false,
        type: String
    },
    distribuidor:{
        required: false,
        type: String
    }
});

module.exports = mongoose.model('Film', filmSchema);