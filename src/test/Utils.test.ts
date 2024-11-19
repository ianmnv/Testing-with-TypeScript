import { ChangeString, changeToUpperCase, getStringInfo } from "../app/Utils";

describe("Utils test", () => {
  describe("Test class ChangeString", () => {
    let sut: ChangeString;

    beforeEach(() => {
      sut = new ChangeString();
    });

    it("Should return string in UpperCase", () => {
      const actual = sut.changeToUpperCase("hello world");
      expect(actual).toBe("HELLO WORLD");
    });

    it("Should throw an error in func declaration", () => {
      function expectError() {
        const actual = sut.changeToUpperCase("");
      }
      expect(expectError).toThrow();
    });

    it.only("Should throw an error in arrow func", () => {
      expect(() => sut.changeToUpperCase("")).toThrow();
    });

    // it("Should throw an error in try/catch block", (done) => {
    //   try {
    //     sut.changeToUpperCase("");
    //     done(
    //       "ChangeToString class should return an error on changeToUpperCase function"
    //     );
    //   } catch (error) {
    //     expect(error).toBeInstanceOf(Error);
    //     expect(error).toHaveProperty("message", "Invalid data type");
    //     done();
    //   }
    // });
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
