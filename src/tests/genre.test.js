require('../models');

const request = require('supertest');
const app = require('../app');

let genreId;

const BASE_URL = '/api/v1/genres';

const genre = {
    name: "Action",
};

    // POST --> (Create)
test("POST -> BASE_URL, should return statusCode 201, and res.body.name === genre.name", async() => {
    const res = await request(app)
        .post(`${BASE_URL}`)
        .send(genre)

        // console.log(res.body)

        expect(res.status).toBe(201)
})
