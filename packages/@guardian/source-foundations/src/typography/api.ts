import { fs } from './fs';
import type {
	BodySizes,
	FontScaleArgs,
	FontScaleFunction,
	HeadlineSizes,
	TextSansSizes,
	TitlepieceSizes,
} from './types';

type TitlepieceFunctions = {
	[key in keyof TitlepieceSizes]: FontScaleFunction;
};

const titlepieceDefaults = {
	lineHeight: 'tight',
	fontWeight: 'bold',
	fontStyle: null,
	unit: 'rem',
};

export const titlepiece: TitlepieceFunctions = {
	small: (options?: FontScaleArgs) =>
		fs(
			'titlepiece',
			'small',
			Object.assign({}, titlepieceDefaults, options),
		),
	medium: (options?: FontScaleArgs) =>
		fs(
			'titlepiece',
			'medium',
			Object.assign({}, titlepieceDefaults, options),
		),
	large: (options?: FontScaleArgs) =>
		fs(
			'titlepiece',
			'large',
			Object.assign({}, titlepieceDefaults, options),
		),
};

type HeadlineFunctions = {
	[key in keyof HeadlineSizes]: FontScaleFunction;
};
const headlineDefaults = {
	lineHeight: 'tight',
	fontWeight: 'medium',
	fontStyle: null,
	unit: 'rem',
};

export const headline: HeadlineFunctions = {
	xxxsmall: (options?: FontScaleArgs) =>
		fs(
			'headline',
			'xxxsmall',
			Object.assign({}, headlineDefaults, options),
		),
	xxsmall: (options?: FontScaleArgs) =>
		fs('headline', 'xxsmall', Object.assign({}, headlineDefaults, options)),
	xsmall: (options?: FontScaleArgs) =>
		fs('headline', 'xsmall', Object.assign({}, headlineDefaults, options)),
	small: (options?: FontScaleArgs) =>
		fs('headline', 'small', Object.assign({}, headlineDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		fs('headline', 'medium', Object.assign({}, headlineDefaults, options)),
	large: (options?: FontScaleArgs) =>
		fs('headline', 'large', Object.assign({}, headlineDefaults, options)),
	xlarge: (options?: FontScaleArgs) =>
		fs('headline', 'xlarge', Object.assign({}, headlineDefaults, options)),
};

type BodyFunctions = {
	[key in keyof BodySizes]: FontScaleFunction;
};

const bodyDefaults = {
	lineHeight: 'loose',
	fontWeight: 'regular',
	fontStyle: null,
	unit: 'rem',
};

export const body: BodyFunctions = {
	xsmall: (options?: FontScaleArgs) =>
		fs('body', 'xsmall', Object.assign({}, bodyDefaults, options)),
	small: (options?: FontScaleArgs) =>
		fs('body', 'small', Object.assign({}, bodyDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		fs('body', 'medium', Object.assign({}, bodyDefaults, options)),
};

type TextSansFunctions = {
	[key in keyof TextSansSizes]: FontScaleFunction;
};

const textSansDefaults = {
	lineHeight: 'loose',
	fontWeight: 'regular',
	fontStyle: null,
	unit: 'rem',
};

export const textSans: TextSansFunctions = {
	xxsmall: (options?: FontScaleArgs) =>
		fs('textSans', 'xxsmall', Object.assign({}, textSansDefaults, options)),
	xsmall: (options?: FontScaleArgs) =>
		fs('textSans', 'xsmall', Object.assign({}, textSansDefaults, options)),
	small: (options?: FontScaleArgs) =>
		fs('textSans', 'small', Object.assign({}, textSansDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		fs('textSans', 'medium', Object.assign({}, textSansDefaults, options)),
	large: (options?: FontScaleArgs) =>
		fs('textSans', 'large', Object.assign({}, textSansDefaults, options)),
	xlarge: (options?: FontScaleArgs) =>
		fs('textSans', 'xlarge', Object.assign({}, textSansDefaults, options)),
	xxlarge: (options?: FontScaleArgs) =>
		fs('textSans', 'xxlarge', Object.assign({}, textSansDefaults, options)),
	xxxlarge: (options?: FontScaleArgs) =>
		fs(
			'textSans',
			'xxxlarge',
			Object.assign({}, textSansDefaults, options),
		),
};
