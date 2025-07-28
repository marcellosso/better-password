import { betterAuth } from "better-auth";
import { describe, expect, it } from "vitest";
import { betterPassword } from "./index";

describe("betterPassword", () => {
	it("initializes without errors", () => {
		expect(() => {
			betterAuth({
				plugins: [
					betterPassword({
						validators: [
							{
								regex: /[!@#$%^&*]/,
								message: "Password must contain a special character",
							},
							{
								validation: (password) => password.length >= 8,
								message: "Password must be at least 8 characters",
							},
						],
					}),
				],
			});
		}).not.toThrow();
	});
});
