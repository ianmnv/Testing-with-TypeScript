import { ChangeString, changeToUpperCase, getStringInfo } from "../app/Utils";

describe("Utils test", () => {
  describe.only("Test class ChangeString", () => {
    let sut: ChangeString;

    beforeEach(() => {
      sut = new ChangeString();
      console.log("setup");
    });

    afterEach(() => {
      // Clear mocks
      console.log("teardown");
    });

    it("Should return string in UpperCase", () => {
      // Arrange
      // const sut = new ChangeString();

      // Act
      const actual = sut.changeToUpperCase("hello world");

      // Assert
      expect(actual).toBe("HELLO WORLD");
      console.log("actual test");
    });
  });

  describe("test changeToUpperCase function with different arguments", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "Valencia", expected: "VALENCIA" },
      { input: "HosPital", expected: "HOSPITAL" },
    ])("should return $input to $expected", ({ input, expected }) => {
      const actual = changeToUpperCase(input);
      expect(actual).toBe(expected);
    });
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
