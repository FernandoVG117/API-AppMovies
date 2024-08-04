const express = require('express');
const routerGenre = require('./genre.router');
const routerArtist = require('./artist.router');
const routerDirector = require('./director.router');
const routerMovie = require('./movie.router');
const router = express.Router();

router.use('/genres', routerGenre);
router.use('/artists', routerArtist);
router.use('/directors', routerDirector);
router.use('/movies', routerMovie);

module.exports = router;