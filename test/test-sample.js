var assert = require("assert");

describe(".pop", () => {
  it("return the last element in array (naive way)", () => {
    assert.ok(["padawan", "knight"].pop() === "knight");
  });
});

describe("", () => {
  it("return the last element in array (3 way)", () => {
    //Setup
    const knightString = "knight";
    const jediPath = ["padawan", knightString];
    //Exercise
    const popped = jediPath.pop();

    //Verify
    assert.ok(popped === knightString);
  });
});
