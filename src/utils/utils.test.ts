import { describe, expect, it } from "vitest";
import { PasswordValidator } from "../types";
import { validatePassword } from ".";

describe('validatePassword', () => {
  const validators = [
    {
      regex: /[!@#$%^&*]/,
      message: "Password must contain a special character"
    },
    {
      validation: (password) => password.includes("_"),
      message: "Password must contain an underscore"
    }
  ] satisfies PasswordValidator[]

  it("should throw an error if the password is invalid", () => {
    expect(() => validatePassword('notvalid', validators)).toThrow("Password must contain a special character, Password must contain an underscore");
  });

  it("should not throw an error if the password is valid", () => {
    expect(() => validatePassword('valid_pass@', validators)).not.toThrow();
  });
 
});