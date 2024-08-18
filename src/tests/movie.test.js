require('../models');

const request = require('supertest');
const app = require('../app');
const Genre = require('../models/Genre');
const Director = require('../models/Director');

let movieId;

const BASE_URL = '/api/v1/movies'

const movie = {
    name: "Aliens Romulus",
    image: "aliensromulis.png",
    synopsis: "Alien Romulus es a 2024 American science fiction horror film.",
    releaseYear: "2024-08-16",
}

    // POST --> (Create)
test("POST --> BASE_URL, should return statusCode 201, and res.body.name === movie.name", async() => {
    const res = await request(app)
        .post(`${BASE_URL}`)
        .send(movie)

        movieId = res.body.id

        // console.log(res.body)

        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe(movie.name)
        expect(res.body.image).toBe(movie.image)
        expect(res.body.synopsis).toBe(movie.synopsis)
        expect(res.body.releaseYear).toBe(movie.releaseYear)
})

    // GET --> (GetAll)
test("GET --> BASE_URL, should return statusCode 200, and res.body.length === 1", async() => {
    const res = await request(app)
        .get(`${BASE_URL}`)

        // console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body[0].name).toBe(movie.name)
        expect(res.body[0].image).toBe(movie.image)
        expect(res.body[0].synopsis).toBe(movie.synopsis)
        expect(res.body[0].releaseYear).toBe(movie.releaseYear)

        expect(res.body[0].genres).toHaveLength(0)
        expect(res.body[0].directors).toHaveLength(0)
        expect(res.body[0].actors).toHaveLength(0)
})

    // GET --> (GetOne)
test("GET --> BASE_URL/:id, should return statusCode 200, and res.body.name === movie.name", async() => {
    const res = await request(app)
        .get(`${BASE_URL}/${movieId}`)

        // console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe(movie.name)
        expect(res.body.image).toBe(movie.image)
        expect(res.body.synopsis).toBe(movie.synopsis)
        expect(res.body.releaseYear).toBe(movie.releaseYear)

        expect(res.body.genres).toHaveLength(0)
        expect(res.body.directors).toHaveLength(0)
        expect(res.body.actors).toHaveLength(0)
})

    // PUT --> (Update)
test("PUT --> BASE_URL/:id, should return statusCode 200, and res.body.name === movieUpdate.name", async() => {
    const movieUpdate = {
        name: 'Final Fantasy VII Advent Children',
        image: 'finalfantasy7.png',
        synopsis: 'The movie is set two years after Final Fantasy VII . A mysterious illness has spread against humanity, Cloud Strife and the children are infected.',
        releaseYear: '2005-09-14',
    }

    const res = await request(app)
        .put(`${BASE_URL}/${movieId}`)
        .send(movieUpdate)

        // console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe(movieUpdate.name)
        expect(res.body.image).toBe(movieUpdate.image)
        expect(res.body.synopsis).toBe(movieUpdate.synopsis)
        expect(res.body.releaseYear).toBe(movieUpdate.releaseYear)
})

        // SetGenres --> /movies/:id/genres
test("POST --> BASE_URL/:id/genres, should return statusCode 200, and res.body.length === 1", async() => {
    const genre = {
        name: "Fantasy",
    }

    const newGenre = await Genre.create(genre)

    const res = await request(app)
        .post(`${BASE_URL}/${movieId}/genres`)
        .send([newGenre.id])

        // console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)

        expect(res.body[0].id).toBeDefined()
        expect(res.body[0].id).toBe(newGenre.id)

    await newGenre.destroy()

})

        // SetDirectors --> /movies/:id/directors
test("POST --> BASE_URL/:id/directors, should return statusCode 200, and res.body.length === 1", async() => {
    const director = {
        firstName: "Marco",
        lastName: "Palmer",
        nationality: "Canadian",
        image: "marcop.png",
        birthday: "2020-02-02",
    }

    const newDirector = await Director.create(director)

    const res = await request(app)
        .post(`${BASE_URL}/${movieId}/directors`)
        .send([newDirector.id])

        console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)
        expect(res.body[0]).toBeDefined()
        expect(res.body[0].id).toBe(newDirector.id)

    await newDirector.destroy()
})

        // SetActors --> /movies/:id/actors

    // DELETE
test("DELETE --> BASE_URL/:id, should return statusCode 204", async() => {
    const res = await request(app)
        .delete(`${BASE_URL}/${movieId}`)

        expect(res.status).toBe(204)
})
