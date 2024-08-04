const express = require('express');
const routerGenre = require('./genre.router');
const routerArtist = require('./artist.router');
const routerDirector = require('./director.router');
const router = express.Router();

router.use('/genres', routerGenre);
router.use('/artists', routerArtist);
router.use('/directors', routerDirector);

module.exports = router;