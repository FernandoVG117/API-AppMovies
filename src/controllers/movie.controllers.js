const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const Director = require('../models/Director');
const Actor = require('../models/Actor');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include: [Genre, Director, Actor]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id, {include: [Genre, Director, Actor]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

// movies/:id/genres
const setGenres = catchError(async(req,res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setGenres(req.body);
    const genres = await movies.getGenres();
    return res.json(genres);
});

// movies:id/directors
const setDirectors = catchError(async(req,res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setDirectors(req.body);
    const directors = await movies.getDirectors();
    return res.json(directors);
});

// movies/:id/actors
const setActors = catchError(async(req,res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setActors(req.body);
    const actors = await movies.getActors();
    return res.json(actors);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres,
    setDirectors,
    setActors,
}