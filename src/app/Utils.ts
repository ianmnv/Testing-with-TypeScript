export class ChangeString {
  changeToUpperCase(arg: string) {
    if (!arg) {
      throw new Error("Invalid data type");
    }
    return arg.toUpperCase();
  }
}

export function changeToUpperCase(str: string) {
  return str.toUpperCase();
}

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): StringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
