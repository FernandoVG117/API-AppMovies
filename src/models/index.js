const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

    //! /movies/:id/artists
Movie.belongsToMany(Actor, {through: "movies_actors"});
Actor.belongsToMany(Movie, {through: "movies_actors"});

    //! /movies/:id/directors
Movie.belongsToMany(Director, {through: "movies_directors"});
Director.belongsToMany(Movie, {through: "movies_directors"});

    //! /movies/:id/genres
Movie.belongsToMany(Genre, {through: "movies_genres"});
Genre.belongsToMany(Movie, {through: "movies_genres"});