import { changeToUpperCase, getStringInfo } from "../app/Utils";

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

  describe("testing getStringInfo function passing hello string", () => {
    test("should return string in lowercase", () => {
      const result = getStringInfo("Hello");
      expect(result.lowerCase).toBe("hello");
    });
    test("should test for returned obj", () => {
      const result = getStringInfo("Hello");
      expect(result.extraInfo).toEqual({});
      expect(result.extraInfo).not.toBe(undefined);
      expect(result.extraInfo).toBeDefined();
      expect(result.extraInfo).not.toBeUndefined();
      expect(result.extraInfo).toBeTruthy();
    });
    test("should return length of string", () => {
      const result = getStringInfo("Hello");
      expect(result.characters.length).toBe(5);
      expect(result.characters).toHaveLength(5);
    });
    test("should return characters of string into an array", () => {
      const result = getStringInfo("Hello");
      expect(result.characters).toEqual(["H", "e", "l", "l", "o"]);
      expect(result.characters).toContain<string>("o");
      expect(result.characters).toEqual(
        expect.arrayContaining(["l", "o", "H", "e", "l"])
      );
    });
  });
});
