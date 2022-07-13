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
const titlepieceFs = fs('titlepiece');

export const titlepiece: TitlepieceFunctions = {
	small: (options?: FontScaleArgs) =>
		titlepieceFs('small', Object.assign({}, titlepieceDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		titlepieceFs('medium', Object.assign({}, titlepieceDefaults, options)),
	large: (options?: FontScaleArgs) =>
		titlepieceFs('large', Object.assign({}, titlepieceDefaults, options)),
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
const headlineFs = fs('headline');

export const headline: HeadlineFunctions = {
	xxxsmall: (options?: FontScaleArgs) =>
		headlineFs('xxxsmall', Object.assign({}, headlineDefaults, options)),
	xxsmall: (options?: FontScaleArgs) =>
		headlineFs('xxsmall', Object.assign({}, headlineDefaults, options)),
	xsmall: (options?: FontScaleArgs) =>
		headlineFs('xsmall', Object.assign({}, headlineDefaults, options)),
	small: (options?: FontScaleArgs) =>
		headlineFs('small', Object.assign({}, headlineDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		headlineFs('medium', Object.assign({}, headlineDefaults, options)),
	large: (options?: FontScaleArgs) =>
		headlineFs('large', Object.assign({}, headlineDefaults, options)),
	xlarge: (options?: FontScaleArgs) =>
		headlineFs('xlarge', Object.assign({}, headlineDefaults, options)),
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
const bodyFs = fs('body');

export const body: BodyFunctions = {
	xsmall: (options?: FontScaleArgs) =>
		bodyFs('xsmall', Object.assign({}, bodyDefaults, options)),
	small: (options?: FontScaleArgs) =>
		bodyFs('small', Object.assign({}, bodyDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		bodyFs('medium', Object.assign({}, bodyDefaults, options)),
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
const textSansFs = fs('textSans');

export const textSans: TextSansFunctions = {
	xxsmall: (options?: FontScaleArgs) =>
		textSansFs('xxsmall', Object.assign({}, textSansDefaults, options)),
	xsmall: (options?: FontScaleArgs) =>
		textSansFs('xsmall', Object.assign({}, textSansDefaults, options)),
	small: (options?: FontScaleArgs) =>
		textSansFs('small', Object.assign({}, textSansDefaults, options)),
	medium: (options?: FontScaleArgs) =>
		textSansFs('medium', Object.assign({}, textSansDefaults, options)),
	large: (options?: FontScaleArgs) =>
		textSansFs('large', Object.assign({}, textSansDefaults, options)),
	xlarge: (options?: FontScaleArgs) =>
		textSansFs('xlarge', Object.assign({}, textSansDefaults, options)),
	xxlarge: (options?: FontScaleArgs) =>
		textSansFs('xxlarge', Object.assign({}, textSansDefaults, options)),
	xxxlarge: (options?: FontScaleArgs) =>
		textSansFs('xxxlarge', Object.assign({}, textSansDefaults, options)),
};
