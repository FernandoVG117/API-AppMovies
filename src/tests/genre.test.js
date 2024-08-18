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

        genreId = res.body.id

        // console.log(res.body)

        expect(res.status).toBe(201)
})

    // GET --> (GetAll)
test("GET -> BASE_URL, shoul return statusCode 200, and res.body.length === 1", async() => {
    const res = await request(app)
        .get(`${BASE_URL}`)

        // console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)
        expect(res.body[0].name).toBe(genre.name)
})
