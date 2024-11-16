import { changeToUpperCase } from "../app/Utils";

describe("Utils test", () => {
  it("should return string uppercase", () => {
    // Arrange:
    const sut = changeToUpperCase;
    const expected = "ABC";

    // Act:
    const actual = sut("abc");

    // Assert:
    expect(actual).toBe(expected);
  });
});
