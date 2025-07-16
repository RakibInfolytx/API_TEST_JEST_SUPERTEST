const request = require('supertest');

const expect = require('chai').expect;

const restBaseUrl = 'https://api.restful-api.dev';

describe('- REST API Testing', () => {
	
  it('- Should be able to verify (GET) object', async () => {

    const response = await request(restBaseUrl).get('/objects?id=3');
    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);
    await expect(response._body[0].id).to.equal("3");
    await expect(response._body[0].name).to.equal('Apple iPhone 12 Pro Max');
    await expect(response._body[0].data.color).to.equal("Cloudy White");
    
	});

  it('- Should be able to creat(POST) object', async () => {

    const response = await request(restBaseUrl)
    .post('/objects')
    .send({
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    });

    console.log(response._body.data)
    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);
    await expect(response._body.data.year).to.equal(2019);
    await expect(response._body.data.price).to.equal(1849.99);
    
	});

  it('- Should be able to update(PUT) object', async () => {

    const response = await request(restBaseUrl)
    .put('/objects/ff8081819782e69e0198123e3d462b65')
    .send({
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2025,
        "price": 20049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
      }
    });

    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);
    await expect(response._body.data.year).to.equal(2025);
    await expect(response._body.data.price).to.equal(20049.99);
    
	});

});

