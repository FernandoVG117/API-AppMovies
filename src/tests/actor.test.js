require('../models');

const request = require('supertest');
const app = require('../app');

let actorId;

const BASE_URL = "/api/v1/actors";
const actor = {
    firstName: "Anne",
    lastName: "Hataway",
    nationality: "North American",
    image: "annehataway.png",
    birthday: "2020-02-20"
};


    // POST -> (Create)
test("POST --> BASE_URL, should return statusCode 201, and return  res.body.firstName === actor.firstName", async() => {
    const res = await request(app)
        .post(`${BASE_URL}`)
        .send(actor)

        actorId = res.body.id

        // console.log(res.body.id)

        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.firstName).toBe(actor.firstName)
        expect(res.body.lastName).toBe(actor.lastName)
        expect(res.body.nationality).toBe(actor.nationality)
        expect(res.body.image).toBe(actor.image)
        expect(res.body.birthday).toBe(actor.birthday)
})

    // GET -> (GetAll)
test("GET --> BASE_URL, should return statusCode 200, and return res.body.length === 1", async() => {
    const res = await request(app)
        .get(`${BASE_URL}`)

        console.log(res.body)

        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)
})