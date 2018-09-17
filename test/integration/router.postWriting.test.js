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

  describe('GET /post',()=>{
    it('GET', (done) => {
        //id in playload
        done();
    });
  });
  describe('GET /posts',()=>{
    it('GET', (done) => {
        chai.request(userRequest).get('/post/');
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });
  });
  describe('POST /post',()=>{
    it('POST', (done) => {
        done();
    }); 
    it("should return error pages",(done)=>{

        done();
    });   
});
describe('PUT /post',()=>{
    it('PUT', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
describe('DELETE /post/id',()=>{
    it('DELETE', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
 
});
