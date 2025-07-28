import { BetterAuthPlugin } from "better-auth";
import type { BetterPasswordOptions } from "./types";
import { validatePassword } from "./utils";

export const betterPassword = (options: BetterPasswordOptions) => {
	return {
		id: "better-password",
		init(ctx) {
			return {
				context: {
					password: {
						...ctx.password,
						hash(password: string) {
							validatePassword(password, options.validators);
							return ctx.password.hash(password);
						},
					},
				},
			};
		},
	} satisfies BetterAuthPlugin;
};
