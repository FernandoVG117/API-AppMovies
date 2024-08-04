const express = require('express');
const routerGenre = require('./genre.router');
const routerArtist = require('./artist.router');
const router = express.Router();

router.use('/genres', routerGenre);
router.use('/artists', routerArtist)

module.exports = router;