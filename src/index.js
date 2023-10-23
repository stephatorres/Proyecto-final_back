const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require("dotenv").config();
const filmRoutes = require("./routes/film")

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', filmRoutes);



//routes
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API de peliculas');
});

//conexion mongo
mongoose
    .connect(process.env.MONGODB_CONECTION)
    .then(() => console.log('Conectado a la BD de manera exitosa'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('servidor en puerto', port));