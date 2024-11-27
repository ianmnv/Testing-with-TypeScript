jest.mock("../../app/doubles/OtherUtils", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  calculateComplexity: () => 10,
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("Mock module test", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
  });

  test("keep other functions", () => {
    const result = OtherUtils.changeToLower("ABC");
    expect(result).toBe("abc");
  });
});
