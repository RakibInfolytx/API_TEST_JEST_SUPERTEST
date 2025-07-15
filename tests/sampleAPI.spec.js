const request = require('supertest');

const expect = require('chai').expect;

const baseUrl = 'https://reqres.in';

describe('- Sample API Testing', () => {
	
  it('- Should be able to verify (GET) USER', async () => {

    const response = await request(baseUrl).get('/api/users?page=2');
    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);

	});

  xit('- Should be able to creat(POST) USER', async () => {

    const response = await request(baseUrl)
    .post('/api/users')
    .send({"name": "morpheus","job": "leader"});
    await expect(response.statusCode).to.equal(201);
    await expect(response.ok).to.equal(true);
    
	});

  xit('- Should be able to update(PUT) USER', async () => {

    const response = await request(baseUrl)
    .put('/api/users/2')
    .send({"name": "morpheus","job": "zion resident"});
    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);
    
	});

});

