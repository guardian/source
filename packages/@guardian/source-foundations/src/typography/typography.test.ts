import {
	fontMapping as fonts,
	fontWeightMapping as fontWeights,
	headline,
	headlineSizes,
	lineHeightMapping as lineHeights,
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
