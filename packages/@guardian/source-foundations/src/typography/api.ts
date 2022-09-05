import { getFontSettingsWithDefaults } from './fs';
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
		getFontSettingsWithDefaults(
			'titlepiece',
			'small',
			Object.assign({}, titlepieceDefaults, options),
		),
	medium: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'titlepiece',
			'medium',
			Object.assign({}, titlepieceDefaults, options),
		),
	large: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
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
		getFontSettingsWithDefaults(
			'headline',
			'xxxsmall',
			Object.assign({}, headlineDefaults, options),
		),
	xxsmall: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'xxsmall',
			Object.assign({}, headlineDefaults, options),
		),
	xsmall: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'xsmall',
			Object.assign({}, headlineDefaults, options),
		),
	small: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'small',
			Object.assign({}, headlineDefaults, options),
		),
	medium: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'medium',
			Object.assign({}, headlineDefaults, options),
		),
	large: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'large',
			Object.assign({}, headlineDefaults, options),
		),
	xlarge: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'headline',
			'xlarge',
			Object.assign({}, headlineDefaults, options),
		),
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
		getFontSettingsWithDefaults(
			'body',
			'xsmall',
			Object.assign({}, bodyDefaults, options),
		),
	small: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'body',
			'small',
			Object.assign({}, bodyDefaults, options),
		),
	medium: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'body',
			'medium',
			Object.assign({}, bodyDefaults, options),
		),
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
		getFontSettingsWithDefaults(
			'textSans',
			'xxsmall',
			Object.assign({}, textSansDefaults, options),
		),
	xsmall: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'xsmall',
			Object.assign({}, textSansDefaults, options),
		),
	small: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'small',
			Object.assign({}, textSansDefaults, options),
		),
	medium: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'medium',
			Object.assign({}, textSansDefaults, options),
		),
	large: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'large',
			Object.assign({}, textSansDefaults, options),
		),
	xlarge: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'xlarge',
			Object.assign({}, textSansDefaults, options),
		),
	xxlarge: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'xxlarge',
			Object.assign({}, textSansDefaults, options),
		),
	xxxlarge: (options?: FontScaleArgs) =>
		getFontSettingsWithDefaults(
			'textSans',
			'xxxlarge',
			Object.assign({}, textSansDefaults, options),
		),
};
