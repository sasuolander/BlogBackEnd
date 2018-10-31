 process.env.NODE_ENV = 'test';

 const chai = require('chai');
 const chai_http = require('chai-http');
 const request = require("supertest");
 const expect = chai.expect;
 const {
     app,
     startServer,
     stopServer
 } = require('../../src/app');
 const mongoose = require("mongoose");
 const postModel = require("./../../src/model/postModel");
 const userModel = require("./../../src/model/userModel");


 chai.use(chai_http);

 // feature testing

 describe('Post', () => {
     before(function () {



         var UserForTesting = new userModel({
             _userId: 1,
             userNanme: "testi"
         });

         var BlogPost = new postModel({
             postTitle: "jussi",
             postContent: "blogi",
         });

         BlogPost.save(function(err){
            if (err) return handleError(err);
         });
         UserForTesting.save(function(err){
            if (err) return handleError(err);
         });
     });
     
         after(function(){
                  UserForTesting.remove({}, callback);
                  BlogPost.remove({}, callback);
             } 
         );

         /*
        beforeEach((done) => {
           
           
         done();
       }); 
        afterEach((done) => {
           //reset database
           
         done();
       }); */

     describe('Get a post', () => {
         it('GET', function (done) {
             //id in playload
             request(app).get("/post")
                 .end(function (err, res) {
                     expect(res.statusCode).to.equal(200);
                     expect(res.type).to.be.an('application/json');
                     done();
                 });
         });
     });

     /*  it("should return error pages",(done)=>{
           //return chai.request(app).get
       done();y
       }); */

     /*   describe('List of posts',()=>{
         it('GET', (done) => {
             
             //return chai.request(app).get


         });
         it("should return error pages",(done)=>{
             //return chai.request(app).get
         
         });
       });
       describe('Save post',()=>{
         it('POST', (done) => {
             //return chai.request(app).post
         }); 
         it("should return error pages",(done)=>{
             //return chai.request(app).get
             
         });   
     });
       describe('Update post',()=>{
         it('PUT', (done) => {
             //return chai.request(app).put
         });
         it("should return error pages",(done)=>{

             //return chai.request(app).get
         });    
     });
       describe('Delete post',()=>{
         it('DELETE', (done) => {

            // return chai.request(app).del
         });
         it("should return error pages",(done)=>{

             //return chai.request(app).get
             done()
         });    
     }); */

 });