const request = require('supertest');
const { server, port } = require('./index');

describe('GET /', () => {
  it('should return the correct response text', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(process.env.RESPONSE_TEXT || 'Hello World');
  });
});
