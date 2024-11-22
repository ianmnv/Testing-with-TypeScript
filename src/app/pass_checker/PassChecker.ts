export enum PasswordErrors {
  SHORT = "Password must be 8 chars min",
  NO_UPPER_CASE = "Pass must have at least 1 upper case",
  NO_LOWER_CASE = "Pass must have at least 1 lower case",
  NO_NUMBER = "Pass must contain at least one number",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PassWordChecker {
  checkPassword(pass: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.checkLength(pass, reasons);
    this.checkUpperCase(pass, reasons);
    this.checkLowerCase(pass, reasons);

    return { valid: reasons.length ? false : true, reasons: reasons };
  }

  checkAdminPassword(pass: string): CheckResult {
    const basicCheck = this.checkPassword(pass);
    this.checkNumber(pass, basicCheck.reasons);

    return {
      valid: basicCheck.reasons.length ? false : true,
      reasons: basicCheck.reasons,
    };
  }

  private checkNumber(pass: string, reasons: PasswordErrors[]) {
    const hasNumber = /\d/;
    if (!hasNumber.test(pass)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkLength(pass: string, reasons: PasswordErrors[]) {
    if (pass.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkUpperCase(pass: string, reasons: PasswordErrors[]) {
    if (pass == pass.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkLowerCase(pass: string, reasons: PasswordErrors[]) {
    if (pass == pass.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }
}
