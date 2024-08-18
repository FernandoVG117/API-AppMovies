require('../models');

const request = require('supertest');
const app = require('../app');

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

        // console.log(res.body)

        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe(movie.name)
})
