process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const userRequest = require('../../src/router/user');
const userSchema = require('../../src/model/userSchema');
chai.use(chaiHttp);

// feature testing

describe('User', ()=>{
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });

  describe('GET /user/index',()=>{
    it('GET', (done) => {
        
        done();
    });
  });
  describe('GET /users',()=>{
    it('GET', (done) => {
        chai.request(userRequest).get('/user/');
        done();
    });
  });
  describe('POST /user',()=>{
    it('POST', (done) => {
        done();
    });    
});
describe('PUT /user',()=>{
    it('PUT', (done) => {
        done();
    });    
});
describe('DELETE /user',()=>{
    it('DELETE', (done) => {
        done();
    });    
});
 
});
