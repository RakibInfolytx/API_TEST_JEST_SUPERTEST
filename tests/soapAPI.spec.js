const request = require('supertest');
const { XMLParser } = require('fast-xml-parser');
const expect = require('chai').expect;

const soapBaseUrl = 'http://www.dneonline.com';

describe('SOAP API Test - Add Operation', () => {
  it('should return 15 as the result of 10 + 5', async () => {
    const soapEnvelope = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Add xmlns="http://tempuri.org/">
            <intA>10</intA>
            <intB>5</intB>
          </Add>
        </soap:Body>
      </soap:Envelope>
    `;

    const response = await request(soapBaseUrl)
      .post('/calculator.asmx')
      .set('Content-Type', 'text/xml; charset=utf-8')
      .set('SOAPAction', '"http://tempuri.org/Add"')
      .send(soapEnvelope);

    const parser = new XMLParser();
    const json = parser.parse(response.text);
    const result = json['soap:Envelope']['soap:Body']['AddResponse']['AddResult'];

    await expect(response.statusCode).to.equal(200);
    await expect(response.ok).to.equal(true);
    await expect(result).to.equal(15);
  });
});
