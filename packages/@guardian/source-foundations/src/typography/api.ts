import { getFontStyle } from './font-styles';
import type {
	BodyFunctions,
	BodyLevels,
	FontScaleArgs,
	HeadlineFunctions,
	HeadlineLevels,
	TextSansFunctions,
	TextSansLevels,
	TitlepieceFunctions,
	TitlepieceLevels,
} from './types';

export const getTitlepieceFontStyleFunction =
	(level: TitlepieceLevels) => (options?: FontScaleArgs) =>
		getFontStyle('titlepiece', level, {
			lineHeight: 'tight',
			fontWeight: 'bold',
			fontStyle: null,
			unit: 'rem',
			...options,
		});

export const titlepiece: TitlepieceFunctions = {
	small: getTitlepieceFontStyleFunction('small'),
	medium: getTitlepieceFontStyleFunction('medium'),
	large: getTitlepieceFontStyleFunction('large'),
};

export const getHeadlineFontStyleFunction =
	(level: HeadlineLevels) => (options?: FontScaleArgs) =>
		getFontStyle('headline', level, {
			lineHeight: 'tight',
			fontWeight: 'medium',
			fontStyle: null,
			unit: 'rem',
			...options,
		});

export const headline: HeadlineFunctions = {
	xxxsmall: getHeadlineFontStyleFunction('xxxsmall'),
	xxsmall: getHeadlineFontStyleFunction('xxsmall'),
	xsmall: getHeadlineFontStyleFunction('xsmall'),
	small: getHeadlineFontStyleFunction('small'),
	medium: getHeadlineFontStyleFunction('medium'),
	large: getHeadlineFontStyleFunction('large'),
	xlarge: getHeadlineFontStyleFunction('xlarge'),
};

export const getBodyFontStyleFunction =
	(level: BodyLevels) => (options?: FontScaleArgs) =>
		getFontStyle('body', level, {
			lineHeight: 'loose',
			fontWeight: 'regular',
			fontStyle: null,
			unit: 'rem',
			...options,
		});
export const body: BodyFunctions = {
	xsmall: getBodyFontStyleFunction('xsmall'),
	small: getBodyFontStyleFunction('small'),
	medium: getBodyFontStyleFunction('medium'),
};

export const getTextSansFontStyleFunction =
	(level: TextSansLevels) => (options?: FontScaleArgs) =>
		getFontStyle('textSans', level, {
			lineHeight: 'loose',
			fontWeight: 'regular',
			fontStyle: null,
			unit: 'rem',
			...options,
		});

export const textSans: TextSansFunctions = {
	xxsmall: getTextSansFontStyleFunction('xxsmall'),
	xsmall: getTextSansFontStyleFunction('xsmall'),
	small: getTextSansFontStyleFunction('small'),
	medium: getTextSansFontStyleFunction('medium'),
	large: getTextSansFontStyleFunction('large'),
	xlarge: getTextSansFontStyleFunction('xlarge'),
	xxlarge: getTextSansFontStyleFunction('xxlarge'),
	xxxlarge: getTextSansFontStyleFunction('xxxlarge'),
};
