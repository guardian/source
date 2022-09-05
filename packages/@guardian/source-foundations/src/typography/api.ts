import { getFontStyle } from './font-styles';
import type {
	BodyFunctions,
	FontScaleArgs,
	HeadlineFunctions,
	TextSansFunctions,
	TitlepieceFunctions,
} from './types';

const titlepieceDefaults = {
	lineHeight: 'tight',
	fontWeight: 'bold',
	fontStyle: null,
	unit: 'rem',
} as const;

export const titlepiece: TitlepieceFunctions = {
	small: (options?: FontScaleArgs) =>
		getFontStyle('titlepiece', 'small', {
			...titlepieceDefaults,
			...options,
		}),
	medium: (options?: FontScaleArgs) =>
		getFontStyle('titlepiece', 'medium', {
			...titlepieceDefaults,
			...options,
		}),
	large: (options?: FontScaleArgs) =>
		getFontStyle('titlepiece', 'large', {
			...titlepieceDefaults,
			...options,
		}),
};

const headlineDefaults = {
	lineHeight: 'tight',
	fontWeight: 'medium',
	fontStyle: null,
	unit: 'rem',
} as const;

export const headline: HeadlineFunctions = {
	xxxsmall: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'xxxsmall', {
			...headlineDefaults,
			...options,
		}),
	xxsmall: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'xxsmall', {
			...headlineDefaults,
			...options,
		}),
	xsmall: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'xsmall', {
			...headlineDefaults,
			...options,
		}),
	small: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'small', {
			...headlineDefaults,
			...options,
		}),
	medium: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'medium', {
			...headlineDefaults,
			...options,
		}),
	large: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'large', {
			...headlineDefaults,
			...options,
		}),
	xlarge: (options?: FontScaleArgs) =>
		getFontStyle('headline', 'xlarge', {
			...headlineDefaults,
			...options,
		}),
};

const bodyDefaults = {
	lineHeight: 'loose',
	fontWeight: 'regular',
	fontStyle: null,
	unit: 'rem',
} as const;

export const body: BodyFunctions = {
	xsmall: (options?: FontScaleArgs) =>
		getFontStyle('body', 'xsmall', {
			...bodyDefaults,
			...options,
		}),
	small: (options?: FontScaleArgs) =>
		getFontStyle('body', 'small', {
			...bodyDefaults,
			...options,
		}),
	medium: (options?: FontScaleArgs) =>
		getFontStyle('body', 'medium', {
			...bodyDefaults,
			...options,
		}),
};

const textSansDefaults = {
	lineHeight: 'loose',
	fontWeight: 'regular',
	fontStyle: null,
	unit: 'rem',
} as const;

export const textSans: TextSansFunctions = {
	xxsmall: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'xxsmall', {
			...textSansDefaults,
			...options,
		}),
	xsmall: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'xsmall', {
			...textSansDefaults,
			...options,
		}),
	small: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'small', {
			...textSansDefaults,
			...options,
		}),
	medium: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'medium', {
			...textSansDefaults,
			...options,
		}),
	large: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'large', {
			...textSansDefaults,
			...options,
		}),
	xlarge: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'xlarge', {
			...textSansDefaults,
			...options,
		}),
	xxlarge: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'xxlarge', {
			...textSansDefaults,
			...options,
		}),
	xxxlarge: (options?: FontScaleArgs) =>
		getFontStyle('textSans', 'xxxlarge', {
			...textSansDefaults,
			...options,
		}),
};
