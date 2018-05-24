const { expect } = require("chai");
const request = require("supertest");
const db = require("../server/db");
const app = require("../server/server");
const Location = db.model("location");

describe("Location Model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  describe("Location model attributes", () => {
    let cafe;
    beforeEach(() => {
      return Location.create({
        name: "Tom's Restaurant",
        address: "2880 Broadway",
        city: "New York",
        state: "NY",
        zipcode: 10028
      }).then(newLoc => (cafe = newLoc));
    });

    it("has a name, address, city, state and zipcode", () => {
      expect(cafe.name).to.equal("Tom's Restaurant");
      expect(cafe.address).to.equal("2880 Broadway");
      expect(cafe.city).to.equal("New York");
      expect(cafe.state).to.equal("NY");
      expect(cafe.zipcode).to.equal("10028");
    });

    it("Should store the zipcode as a string for better db storage", () => {
      expect(cafe.zipcode).to.be.a("string");
    });
  });
});

describe("Location API routes", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  let name1 = "Central Perk";
  let addr1 = "102 1st Avenue";
  let city1 = "New York";
  let state1 = "NY";
  let zipcode1 = "10009";
  let cafeId1;

  let name2 = "Cafe Nervosa";
  let addr2 = "107 Pike Street";
  let city2 = "Seattle";
  let state2 = "WA";
  let zipcode2 = "9801";
  let cafeId2;

  beforeEach(() => {
    return Location.create({
      name: name1,
      address: addr1,
      city: city1,
      state: state1,
      zipcode: zipcode1
    }).then(newLoc => {
      cafeId1 = newLoc.id;
    });
  });

  beforeEach(() => {
    return Location.create({
      name: name2,
      address: addr2,
      city: city2,
      state: state2,
      zipcode: zipcode2
    }).then(newLoc => {
      cafeId2 = newLoc.id;
    });
  });

  it("GET /api/locations gets all locations", () => {
    return request(app)
      .get("/api/locations")
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an("array");
        expect(res.body).to.have.lengthOf(2);
      });
  });
});