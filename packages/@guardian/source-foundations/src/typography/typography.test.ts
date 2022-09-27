import { rootPixelFontSize } from '../utils/px-to-rem';
import { pxTextSizes, remTextSizes } from './data';
import {
	fonts,
	fontWeights,
	headline,
	headlineSizes,
	lineHeights,
	remHeadlineSizes,
} from '.';

it('should return styles containing the specified font family', () => {
	const mediumHeadlineStyles = headline.medium();

	expect(mediumHeadlineStyles).toContain(`font-family: ${fonts.headline};`);
});

it('should return styles containing the specified font size', () => {
	const mediumHeadlineStyles = headline.medium();

	expect(mediumHeadlineStyles).toContain(
		`font-size: ${remHeadlineSizes.medium}rem;`,
	);
});

it('should return styles containing the specified font size in px if requested', () => {
	const mediumHeadlineStyles = headline.medium({ unit: 'px' });

	expect(mediumHeadlineStyles).toContain(
		`font-size: ${headlineSizes.medium}px;`,
	);
});

it('should return styles containing the specified font weight', () => {
	const mediumHeadlineStyles = headline.medium({ fontWeight: 'bold' });

	expect(mediumHeadlineStyles).toContain(`font-weight: ${fontWeights.bold};`);
});

it('should return styles containing the specified line height', () => {
	const mediumHeadlineStyles = headline.medium({ lineHeight: 'tight' });

	expect(mediumHeadlineStyles).toContain(`line-height: ${lineHeights.tight};`);
});

it('should return styles containing the specified line height in px if requested', () => {
	const mediumHeadlineStyles = headline.medium({
		lineHeight: 'tight',
		unit: 'px',
	});

	expect(mediumHeadlineStyles).toContain(
		`line-height: ${lineHeights.tight * headlineSizes.medium}px;`,
	);
});

it('should return italic styles if specified', () => {
	const mediumHeadlineStyles = headline.medium({ fontStyle: 'italic' });

	expect(mediumHeadlineStyles).toContain('font-style: italic;');
});

it('should return normal styles if specified', () => {
	const mediumHeadlineStyles = headline.medium({ fontStyle: 'normal' });

	expect(mediumHeadlineStyles).toContain('font-style: normal;');
});

it('should not return font styles if unspecified', () => {
	const mediumHeadlineStyles = headline.medium();

	expect(mediumHeadlineStyles).not.toContain('font-style');
});

it('should not include italic font style if it is not available for requested font', () => {
	const mediumHeadlineStyles = headline.medium({
		fontWeight: 'bold',
		fontStyle: 'italic',
	});

	const largeHeadlineStyles = headline.large({
		fontWeight: 'bold',
		fontStyle: 'italic',
	});

	expect(mediumHeadlineStyles).not.toContain('font-style: italic;');
	expect(largeHeadlineStyles).not.toContain('font-style: italic;');
});

describe('Validate that the font size px and rem values match those expected for each entry in the scale', () => {
	const sizes = [12, 14, 15, 17, 20, 24, 28, 34, 42, 50, 70] as const;
	const names = [
		'xxxsmall',
		'xxsmall',
		'xsmall',
		'small',
		'medium',
		'large',
		'xlarge',
		'xxlarge',
		'xxxlarge',
	] as const;

	it.each(Object.entries(pxTextSizes))(
		'pxTextSizes has valid values for %s',
		(key, value) => {
			expect(typeof key).toBe('string');
			for (const [name, size] of Object.entries(value)) {
				expect(names).toContain(name);
				expect(sizes).toContain(size);
			}
		},
	);

	it.each(Object.entries(remTextSizes))(
		'remTextSizes has valid values for %s',
		(key, value) => {
			expect(typeof key).toBe('string');
			for (const [name, remSize] of Object.entries(value)) {
				// @ts-expect-error -- we’re testing
				const pxSize: number = pxTextSizes[key][name] ?? -1;
				expect(remSize).toBeCloseTo(pxSize / rootPixelFontSize, 6);
			}
		},
	);
});
