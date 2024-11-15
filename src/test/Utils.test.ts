import { changeToUpperCase } from "../app/Utils";

describe("Utils test", () => {
  test("should return string uppercase", () => {
    const results = changeToUpperCase("abc");
    expect(results).toBe("ABC");
  });
});
