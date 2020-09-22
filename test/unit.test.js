const supertest = require("supertest");
const assert = require('assert');
const app = require("../bin/start");
const read_data = require('./readdata')

describe("POST /", function(){
    it("it shoud return status code 200 ", function(done) {
      supertest(app)
        .post("/test-json")
        .send(read_data.input)
        .expect(200)
        .end(function(err, res){
          if (err){
              done(err);
          };
          done();
        });
    });
  });

  describe("POST /", function(){
    it("it shoud return status code 400 ", function(done) {
      supertest(app)
        .post("/test-json")
       .set('content-type', 'text/plain')
        .expect(400)
        .end(function(err, res){
          if (err){
           done(err)
          };
          done();
        });
    });
  });

  describe("POST /", function(){
    it("it shoud return status code 500", function(done) {
      supertest(app)
        .post("/test-json")
        .send(read_data.fieldMismatch)
        .expect(500)
        .end(function(err, res){
          if (err){
             done(err);
          };
          done();
        });
    });
  });

