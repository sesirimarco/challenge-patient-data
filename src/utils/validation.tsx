export const isEmpty = (value: string | null | undefined): boolean => {
	return value === null || value === undefined || value.trim() === "";
};

export const isValidUrl = (url: string): boolean => {
	const regularExp = /^(ftp|http|https):\/\/[^ "]+$/;

	return regularExp.test(url);
};
