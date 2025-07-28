export interface PasswordValidator {
	message: string;
	validation?: (password: string) => boolean;
	regex?: RegExp;
}

export interface BetterPasswordOptions {
	validators: PasswordValidator[];
}
