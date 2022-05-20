let server = require("../index");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { request } = require("chai");

chai.should();
chai.use(chaiHttp);

describe("Simple API", () => {
  describe("Test get route /", () => {
    it("It should return all tasks", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
