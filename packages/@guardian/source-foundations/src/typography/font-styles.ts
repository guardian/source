import {
	fonts,
	fontWeights,
	fontWeightsAvailable,
	italicsAvailableForFontWeight,
	lineHeights,
	pxTextSizes,
	remTextSizes,
	underlineThickness,
} from './data';
import type {
	Categories,
	FontScaleArgs,
	FontStyle,
	Option,
	TypographyConfiguration,
	TypographyStyles,
} from './types';

const determineFontStyleProperty = (
	fontStyle: Option<FontStyle>,
	hasItalic: boolean,
) => {
	switch (fontStyle) {
		case 'italic':
			return hasItalic ? 'italic' : undefined;
		case 'normal':
			return 'normal';
		case null:
		default:
			return undefined;
	}
};

/**
 * Generates a method that returns a TypographyStyles object for a given font scale.
 *
 * **Example**, generate a method that returns styles for the `headline` category
 * at the `small` level and a default font weight of `medium`:
 *
 * ```
 * const headlineSmall =
 * fontStyleFunction('headline', 'small', { fontWeight: 'medium' });
 * ```
 *
 * **Example usage**, we call the method to get our typography stylesand override
 * the default font weight set above with `bold`:
 *
 * ```
 * const headlineSmallStyles =
 * headlineSmall({ fontWeight: 'bold' });
 * ```
 */
export const fontStyleFunction =
	<Category extends keyof Categories, Level extends keyof Categories[Category]>(
		category: Category,
		level: Level,
		defaults: TypographyConfiguration,
	) =>
	(options?: FontScaleArgs): TypographyStyles => {
		const finalFontConfiguration: TypographyConfiguration = {
			...defaults,
			...options,
		};

		// Fetch the font size in pixels and rems for the given category and level
		const pxTextSize = Number(pxTextSizes[category][level]);
		const remTextSize = Number(remTextSizes[category][level]);

		// Determine if italic font-style is available for this font weight
		const hasItalic =
			italicsAvailableForFontWeight[category]?.[
				finalFontConfiguration.fontWeight
			] ?? false;

		// Determine if setting the font weight is allowed for the given category
		const isFontWeightAvailable =
			fontWeightsAvailable[category]?.[finalFontConfiguration.fontWeight] ??
			false;

		const fontWeight = isFontWeightAvailable
			? fontWeights[finalFontConfiguration.fontWeight]
			: undefined;

		// line-height is defined as a unitless value, so we multiply
		// by the element's font-size in px to get the px value
		const lineHeight =
			finalFontConfiguration.unit === 'px'
				? `${lineHeights[finalFontConfiguration.lineHeight] * pxTextSize}px`
				: lineHeights[finalFontConfiguration.lineHeight];

		return {
			lineHeight,
			fontWeight,
			fontSize:
				finalFontConfiguration.unit === 'px' ? pxTextSize : `${remTextSize}rem`,
			fontFamily: fonts[category],
			textDecorationThickness: Number(underlineThickness[category][level]),
			fontStyle: determineFontStyleProperty(
				finalFontConfiguration.fontStyle,
				hasItalic,
			),
		};
	};
