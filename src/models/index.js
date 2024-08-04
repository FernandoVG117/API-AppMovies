const Artist = require("./Artist");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

    //! /movies/:id/artists
Movie.belongsToMany(Artist, {through: "movies_artists"});
Artist.belongsToMany(Movie, {through: "movies_artists"});

    //! /movies/:id/directors
Movie.belongsToMany(Director, {through: "movies_directors"});
Director.belongsToMany(Movie, {through: "movies_directors"});

    //! /movies/:id/genres
Movie.belongsToMany(Genre, {through: "movies_genres"});
Genre.belongsToMany(Movie, {through: "movies_genres"});