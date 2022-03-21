import { apply30x30ViewBox, stripAttributes } from './process-svg';

describe('The stripAttributes function', () => {
	it('should return the svg tag with the height, width and fill attributes removed', () => {
		const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
		const stripped = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>`;

		expect(stripAttributes('test', svg)).toBe(stripped);
	});

	it('should return the svg tag with the height, width and fill attributes removed for brand icons', () => {
		const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
		const stripped = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>`;

		expect(stripAttributes('paypal', svg)).toBe(stripped);
	});

	it('removes the fill attribute from a single path', () => {
		const svg = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"/></svg>`;
		const stripped = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227"></path></svg>`;

		expect(stripAttributes('test', svg)).toBe(stripped);
	});

	it('removes the fill attribute from multiple paths', () => {
		const svg = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227" fill="#0F2962"/></svg>`;
		const stripped = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227"></path></svg>`;

		expect(stripAttributes('test', svg)).toBe(stripped);
	});

	it('does not remove the fill attribute from brand icon paths', () => {
		const svg = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227" fill="#0F2962"></path></svg>`;
		const stripped = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227" fill="#0F2962"></path></svg>`;

		expect(stripAttributes('pay-pal-brand', svg)).toBe(stripped);
	});
});

describe('The apply30x30ViewBox function', () => {
	it('replaces viewBox attribute with a 30x30 viewBox', () => {
		const svg = `<svg viewBox="0 0 24 24"></svg>`;
		const replaced = `<svg viewBox="-3 -3 30 30"></svg>`;

		expect(apply30x30ViewBox('test', svg)).toBe(replaced);
	});
	it('does not replace the viewBox attribute for an icon with a custom viewbox', () => {
		const svg = `<svg viewBox="-1 2 50 20"></svg>`;
		const replaced = `<svg viewBox="-1 2 50 20"></svg>`;

		expect(apply30x30ViewBox('direct-debit-wide', svg)).toBe(replaced);
	});
});
