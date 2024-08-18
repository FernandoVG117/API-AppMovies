require('../models');

const request = require('supertest');
const app = require('../app');

let directorId;

const BASE_URL = '/api/v1/directors';

const director = {
    firstName: "Marco",
    lastName: "Palmer",
    nationality: "Canadian",
    image: "marcop.png",
    birthday: "2020-02-02",
}

    // POST -> (Create)
test("POST --> BASE_URL, should return statusCode 201, and res.body.firstName === director.firstName", async() => {
    const res = await request(app)
        .post(`${BASE_URL}`)
        .send(director)

        console.log(res.body)

        expect(res.status).toBe(201)
})