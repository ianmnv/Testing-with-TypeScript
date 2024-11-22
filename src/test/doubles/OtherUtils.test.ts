import {
  calculateComplexity,
  toUpperWithCB,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  describe.only("Tracking callback with jest mocks", () => {
    const callbackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls callback for invalid arg - track calls", () => {
      const sut = toUpperWithCB;
      const actual = sut("", callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith("Invalid arg");
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it("calls callback for valid arg - track calls", () => {
      const sut = toUpperWithCB;
      const actual = sut("aabc", callbackMock);
      expect(actual).toBe("AABC");
      expect(callbackMock).toHaveBeenCalledWith(
        "Function called with aabc arg"
      );
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Tracking callback", () => {
    let callbackArg = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      callbackArg.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      callbackArg = [];
      timesCalled = 0;
    });

    it("calls callback for invalid arg - track calls", () => {
      const sut = toUpperWithCB;
      const actual = sut("", callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackArg).toContain("Invalid arg");
      expect(timesCalled).toBe(1);
    });

    it("calls callback for valid arg - track calls", () => {
      const sut = toUpperWithCB;
      const actual = sut("aabc", callbackMock);
      expect(actual).toBe("AABC");
      expect(callbackArg).toContain("Function called with aabc arg");
      expect(timesCalled).toBe(1);
    });
  });

  it("toUpperWitCB - calls callback for invalid arg", () => {
    const sut = toUpperWithCB;
    const actual = sut("", () => {});
    expect(actual).toBeUndefined();
  });

  it("toUpperWitCB - calls callback for valid arg", () => {
    const sut = toUpperWithCB;
    const actual = sut("abc", () => {});
    expect(actual).toBe("ABC");
  });

  it("Calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "123",
        field2: "abc",
      },
    };

    const sut = calculateComplexity;
    const actual = sut(someInfo as any);
    expect(actual).toBe(10);
  });
});
