const express = require('express');
const routerGenre = require('./genre.router');
const router = express.Router();

router.use('/genres', routerGenre);

module.exports = router;