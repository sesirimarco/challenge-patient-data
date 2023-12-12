import { isEmpty, isValidUrl } from "../src/utils/validation";

test("isEmpty returns true for null, undefined, and empty string'", () => {
	expect(isEmpty(null)).toBe(true);
	expect(isEmpty(undefined)).toBe(true);
	expect(isEmpty("")).toBe(true);
});

test("isEmpty returns false for non-empty strings", () => {
	expect(isEmpty("hello")).toBe(false);
	expect(isEmpty("   some whitespace   ")).toBe(false);
});

test("isValidUrl returns true for valid URLs", () => {
	expect(isValidUrl("http://example.com")).toBe(true);
	expect(isValidUrl("https://www.example.com")).toBe(true);
	expect(isValidUrl("ftp://ftp.example.com")).toBe(true);
});

test("isValidUrl returns false for invalid URLs", () => {
	expect(isValidUrl("not-a-url")).toBe(false);
	expect(isValidUrl("ftp://")).toBe(false);
	expect(isValidUrl("http:/example.com")).toBe(false);
});
