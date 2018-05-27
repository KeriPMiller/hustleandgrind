const { expect } = require("chai");
const request = require("supertest");
const db = require("../server/db");
const app = require("../server/server");
const User = db.model("user");

describe("User Model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  describe("User model attributes", () => {
    let testUser;
    beforeEach(() => {
      return User.create({
        email: "skullz@fiendclub.com",
        username: "Danzig",
        password: "letmein"
      }).then(newLoc => (testUser = newLoc));
    });

    it("has an email and username", () => {
      expect(testUser.email).to.equal("skullz@fiendclub.com");
      expect(testUser.username).to.equal("Danzig");
    });

    it("does not store the password as a plain string", () => {
      expect(testUser.password).to.not.equal("letmein");
    });
  });
  describe("User API routes", () => {
    beforeEach(() => {
      return db.sync({ force: true });
    });

    let email1 = "catlady@catz.com";
    let username1 = "catLady";
    let pass1 = "catscatscats";
    let userId1;

    let email2 = "DrCrusher@starfleet.com";
    let username2 = "dancingDoctor";
    let pass2 = "Wesley";
    let userId2;


    beforeEach(() => {
      return User.create({
        email: email1,
        username: username1,
        password: pass1
      }).then(newU => {
        userId1 = newU.id;
      });
    });

    beforeEach(() => {
      return User.create({
        email: email2,
        username: username2,
        password: pass2
      }).then(newU => {
        userId2 = newU.id;
      });
    });

    it("GET /api/users gets all users", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body).to.have.lengthOf(2);
        });
    });

    it("GET /api/users/:username gets user by username", () => {
      return request(app)
        .get(`/api/users/${username2}`)
        .expect(200)
        .then(res => {
          expect(res.body.id).to.be.equal(userId2);
          expect(res.body.username).to.be.equal(username2);
        });
    });

    it("POST /auth/signup/ it can post new users", () => {
      return request(app)
        .post("/auth/signup")
        .send({
          email: "nationalTresure@aol.com",
          username: "xXxNicCagexXx",
          password: "b33s"
        })
        .expect(201)
        .then(res => {
          const newTestUser = res.body;
          return User.findById(newTestUser.id);
        })
        .then(foundUser => {
          expect(foundUser.username).to.be.equal("xXxNicCagexXx");
        });
    });

    it("PUT /api/users/:userId it can update a user", () => {
      return request(app)
        .put(`/api/users/${userId1}`)
        .send({
          email: "catzlady@hotmail.com"
        })
        .then(res => {
          expect(res.status).to.be.equal(202);
          expect(res.body.email).to.equal("catzlady@hotmail.com");
        })
    });

    it("DELETE /api/users/:userId it can delete a user", () => {
      return request(app)
        .delete(`/api/users/1`)
        .expect(204);
    });
  });
});