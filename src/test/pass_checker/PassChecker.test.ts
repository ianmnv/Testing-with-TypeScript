import {
  PassWordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PassChecker";

describe("PasswordChecker test suite", () => {
  let sut: PassWordChecker;

  beforeEach(() => {
    sut = new PassWordChecker();
  });

  it("checkPassword function should return false bc chars are less than 8", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("checkPassword function should return true bc chars are more than 8", () => {
    const actual = sut.checkPassword("12345678");
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  test("checkPassword with no upper case is invalid", () => {
    const actual = sut.checkPassword("abcs");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  test("checkPassword with upper case is valid", () => {
    const actual = sut.checkPassword("abcsA");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("checkPassword with no lower case is invalid", () => {
    const actual = sut.checkPassword("JFGGR");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("checkPassword with lower case is valid", () => {
    const actual = sut.checkPassword("abMGQA");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Checks for a correct password", () => {
    const actual = sut.checkPassword("1234567ABvc");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  it("Admin password with no numbers", () => {
    const actual = sut.checkAdminPassword("abcdABCD");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Admin password with numbers", () => {
    const actual = sut.checkAdminPassword("abcdABCD1");
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
