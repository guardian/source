import {
	availableFontWeights,
	fonts,
	fontWeights,
	italicsFontWeights,
	lineHeights,
	pxTextSizes,
	remTextSizes,
	underlineThickness,
} from './data';
import type {
	Categories,
	FontScaleArgs,
	FontScaleFunction,
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
 * **Example usage**, we call the method to get our typography styles and override
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
			italicsFontWeights[category]?.[finalFontConfiguration.fontWeight] ??
			false;

		// Determine if setting the font weight is allowed for the given category
		const isFontWeightAvailable =
			availableFontWeights[category]?.[finalFontConfiguration.fontWeight] ??
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

/**
 * Generates a method that evaluates a given font scale function with the
 * provided options and returns the typography styles as a CSS string.
 *
 * For an example usage see our {@link [typography string function exports](./index.ts)}.
 *
 * The CSS string exposes a scoped variable: `--source-text-decoration-thickness`,
 * so consumers can use the recommended value for the font/weight combination.
 *
 * For the text underline thickness mappings see {@link underlineThickness}.
 */
export const fontStyleToStringFunction =
	(typographyFunction: FontScaleFunction) =>
	(options?: FontScaleArgs): string => {
		const {
			fontFamily,
			fontSize,
			fontStyle,
			fontWeight,
			lineHeight,
			textDecorationThickness,
		} = typographyFunction(options);

		return `
			font-family: ${fontFamily};
			font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
			line-height: ${lineHeight};
			${fontWeight ? `font-weight: ${fontWeight}` : ''};
			${fontStyle ? `font-style: ${fontStyle}` : ''};

			/*
			 * Child elements (e.g. <Link/>) can use this variable
			 * to set the thickness of their underline.
			 *
			 * The thickness for each font type and weight is defined
			 * in the underlineThickness object.
			 */
			--source-text-decoration-thickness: ${
				textDecorationThickness === undefined
					? 'auto'
					: `${textDecorationThickness}px`
			};
		`;
	};
