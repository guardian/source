import { pxToRem, rootPixelFontSize } from './px-to-rem';

it('should calculate a rem equivalent of a pixel value', () => {
	const value = 17;
	const result = pxToRem(value);
	expect(result).toBe(value / rootPixelFontSize);
});
