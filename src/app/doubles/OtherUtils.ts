export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (str: string) => void;

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function changeToUpper(str: string) {
  return str.toUpperCase();
}

export function changeToLower(str: string) {
  return str.toLowerCase();
}

export function toUpperWithCB(str: string, callback: LoggerServiceCallback) {
  if (!str) {
    callback("Invalid arg");
    return;
  }
  callback(`Function called with ${str} arg`);
  return str.toUpperCase();
}

export class OtherStringUtils {
  private callExternalService() {
    console.log("Calling external services");
  }

  changeToUpper(str: string) {
    return str.toUpperCase();
  }

  logToConsole(str: string) {
    console.log(str);
  }
}
