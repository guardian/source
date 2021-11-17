import { stripAttributes } from './process';

describe('The stripAttributes function', () => {
	it('should return the svg tag with the height, width and fill atrributes removed', () => {
		const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`;
		const stripped = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>`;

		expect(stripAttributes(svg)).toBe(stripped);
	});

	it('removes the fill atrribute from a single path', () => {
		const svg = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"/></svg>`;
		const stripped = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227"/></svg>`;

		expect(stripAttributes(svg)).toBe(stripped);
	});

	it('removes the fill atrribute from multiple paths', () => {
		const svg = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227" fill="#052962"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227" fill="#0F2962"/></svg>`;
		const stripped = `<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5227"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C22 17.5227"/></svg>`;

		expect(stripAttributes(svg)).toBe(stripped);
	});
});
