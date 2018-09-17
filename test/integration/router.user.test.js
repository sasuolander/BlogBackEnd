process.env.NODE_ENV = 'test';

const chai = require('chai');

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const userRequest = require('../../src/router/user');
const userSchema = require('../../src/model/userSchema');
const should = chai.should();
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
    it('should return all Users', (done) => {
        chai.request(userRequest).get('/user/');

        done();

    it("should return error pages",(done)=>{

        done();
    });
    });
  });
  describe('POST /user',()=>{
    it('POST', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
describe('PUT /user',()=>{
    it('PUT', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
describe('DELETE /user',()=>{
    it('DELETE', (done) => {
        done();
    }); 
    it("should return error pages",(done)=>{

        done();
    });   
});
 
});
