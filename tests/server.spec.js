const request = require('supertest');
const { app, startServer } = require('../server');

let server;

beforeAll(() => {
    server = startServer(); // Start the test server
});

afterAll(() => {
    server.close(); // Close the test server after tests
});

describe('GET /', () => {
    test('should return Hello World', async () => {
        const res = await request(server).get('/'); // Send request to running server
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World');
    });
});
