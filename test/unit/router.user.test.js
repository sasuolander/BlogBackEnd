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
        //chai.request(userRequest).get('/user/');
        const usersMock = sinon.mock(userModel);
        const expectedResult = {status:true,user:[]};
        usersMock.expects('find').yields(null,expectedResult);
        userModel.find((err,result)=>{
           usersMock.verify(); usersMock.restore();
           expect(result.status).to.be.true;
           done();
        });
    });

    it("should return error pages",(done)=>{
        const usersMock = sinon.mock(userModel);
        const expectedResult = {status:false,error:"Something went wrong"};
        usersMock.expects('find').yields(expectedResult,null);
        userModel.find((err,result)=>{
            usersMock.verify(); usersMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
  });
  describe('Save user',()=>{
        it('Saving user', (done) => {
            const userMock = sinon.mock(new userModel ({ user: 'Save new user from mock'}));
            const userObject = userMock.object;
            const expectedResult = { status: true };
            userMock.expects('save').yields(null, expectedResult);
            userObject.save( (err, result)=> {
                userMock.verify();
                userMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });
        it("should return error pages",(done)=>{
            const userMock = sinon.mock(new userModel({ user: 'Save new user from mock'}));
            const userObject = userMock.object;
            const expectedResult = { status: false };
            userMock.expects('save').yields(expectedResult, null);
            userObject.save( (err, result)=> {
                userMock.verify();
                userMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
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
