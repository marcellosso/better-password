import { APIError } from "better-auth/api";
import type { PasswordValidator } from "../types";

export const validatePassword = (
	password: string,
	validators: PasswordValidator[],
) => {
	const errors: string[] = [];

	for (const validator of validators) {
		let isValid = true;
		if (validator.regex) {
			if (validator.regex instanceof RegExp) {
				isValid = validator.regex.test(password);
			} else {
				throw new APIError("BAD_REQUEST", {
					message: "Invalid regex",
				});
			}
		}
		if (validator.validation) {
			try {
				isValid = validator.validation(password);
			} catch (error) {
				throw new APIError("BAD_REQUEST", {
					message: "Invalid validation",
				});
			}
		}

		if (!isValid) {
			errors.push(validator.message);
		}
	}

	if (errors.length > 0) {
		throw new APIError("BAD_REQUEST", {
			message: errors.join(", "),
		});
	}
};
