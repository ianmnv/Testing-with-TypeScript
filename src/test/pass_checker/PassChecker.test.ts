import { PassWordChecker } from "../../app/pass_checker/PassChecker";

describe("PasswordChecker test suite", () => {
  let sut: PassWordChecker;

  beforeEach(() => {
    sut = new PassWordChecker();
  });

  test("checkPassword function should return false bc chars are less than 8", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual).toBe(false);
  });

  test("checkPassword function should return true bc chars are more than 8", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual).toBe(true);
  });

  test("checkPassword function should return false bc don't include uppercase", () => {
    const actual = sut.checkPassword("1234abcs");
    expect(actual).toBe(false);
  });

  test("checkPassword function should return true bc includes uppercase", () => {
    const actual = sut.checkPassword("1234abcsA");
    expect(actual).toBe(true);
  });

  test("checkPassword function should return false bc don't include lowercase", () => {
    const actual = sut.checkPassword("1234JFGGR");
    expect(actual).toBe(false);
  });

  test("checkPassword function should return true bc includes lowercase", () => {
    const actual = sut.checkPassword("1234abMGQA");
    expect(actual).toBe(true);
  });
});
