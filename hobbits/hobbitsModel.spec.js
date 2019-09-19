const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("should insert hobbits into the db", async () => {
      //insert a record
      await Hobbits.insert({ name: "Gaffer" });
      //assert the record was inserted
      let hobbits = await db("hobbits");
      console.log(hobbits);

      //assert the record was inserted
      expect(hobbits).toHaveLength(1);
    });
  });
});
