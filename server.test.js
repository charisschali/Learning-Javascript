const request = require('supertest');
const app = require('./server')

describe('LIONS', () => {
    it('should get all lions', async (done) => {
        request(app).get('/lions').then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([])
            done();
        });
    });
    it('should create a lion', (done) => {
        request(app)
        .post('/lions')
        .send({
            name: 'moses'
        })
        .set('Accept', 'application/json')
        .expect(201)
    })
});
