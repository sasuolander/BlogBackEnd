process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const postModel = require('../../src/model/postModel');

// feature testing

describe('Post', ()=>{
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });

  describe('Get a post',()=>{
    it('GET', (done) => {
        //id in playload
        done();
    });
  });
  describe('List of posts',()=>{
    it('GET', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });
  });
  describe('Save post',()=>{
    it('POST', (done) => {
        done();
    }); 
    it("should return error pages",(done)=>{

        done();
    });   
});
describe('Update post',()=>{
    it('PUT', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
describe('Delete post',()=>{
    it('DELETE', (done) => {
        done();
    });
    it("should return error pages",(done)=>{

        done();
    });    
});
 
});
