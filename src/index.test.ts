import { describe, it } from 'vitest';
import { betterPassword } from './index';
import { betterAuth } from 'better-auth';


describe("betterPassword", () => {
  it("initializes without errors", () => {
    betterAuth({
      plugins: [
        betterPassword({
          validators: [
            {
              regex: /[!@#$%^&*]/,
              message: "Password must contain a special character"
            },
            {
              validation: (password) => password.length >= 8,
              message: "Password must be at least 8 characters"
            }
          ]
        })
      ]
    })
  })
})