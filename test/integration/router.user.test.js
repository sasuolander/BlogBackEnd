process.env.NODE_ENV = 'test';

const chai = require('chai');
const sinon = require('sinon');
const userRequest = require('../../src/router/user');
const userModel = require('../../src/model/userModel');
const expect = chai.expect;

// feature testing

describe('User', ()=>{
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });

  describe('Get a user',()=>{
    it('GET', (done) => {
        
        done();
    });
  });
  describe('List of users',()=>{
    it('should return all Users', (done) => {
        done();
    });

    it("should return error pages",(done)=>{
        done();
    });
  });
  describe('Save user',()=>{
        it('Saving user', (done) => {
            done();
        });
        it("should return error pages",(done)=>{
            done();
        });    
    });
    describe('Update user',()=>{
        it('PUT', (done) => {
            done();
        });
        it("should return error pages",(done)=>{

            done();
        });    
    });
    describe('Delete user',()=>{
        it('DELETE', (done) => {
            done();
        }); 
        it("should return error pages",(done)=>{

            done();
        });   
    });
});
