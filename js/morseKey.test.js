import { objectReverse } from "./morseKey.js";

describe("test cases for swapping the key value pairs of an object", () => {
  it("swaps the key and values in a given object correctly", () => {
    expect(objectReverse({ name: "Sam", nation: "USA" })).toEqual({
      Sam: "name",
      USA: "nation",
    });
  });
});
