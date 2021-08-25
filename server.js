'use strict';

const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());


const getWeather = require('./routes/weather.js');
const getMovies = require('./routes/movies.js');

app.get('/weather', getWeather);
app.get('/movies', getMovies);

function errorHandler(req, res) {
  res.status(500).send('Error: Something is Missing. Please Check Your URL');
}

app.use('*', errorHandler);

app.listen(PORT, () => console.log(`Running Server on ${PORT}`));
