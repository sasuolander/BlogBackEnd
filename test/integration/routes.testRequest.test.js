process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const testRequest = require('../../src/router/testRequest');
chai.use(chaiHttp);

// feature testing

describe('testRoute', ()=>{
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });

  describe('GET /', () => {
    it('TestPage', (done) => {
      chai.request(testRequest)
          .get('/testRequest')
          .end((err, res) => {
            res.redirects.length.should.equal(0);
            res.status.should.equal(200);
            res.type.should.equal('text/html');
            done();
          });
    });
  });
});
