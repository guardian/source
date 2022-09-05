import { palette } from './colour/palette';

// accessibility
export { descriptionId } from './accessibility/description-id';
export { focusHalo, focusHaloSpaced } from './accessibility/focus-halo';
export { generateSourceId } from './accessibility/generate-source-id';
export { visuallyHidden } from './accessibility/visually-hidden';

// animation
export { transitions } from './animation/transitions';

// breakpoints
export type { Breakpoint } from './breakpoints/breakpoints';
export { breakpoints } from './breakpoints/breakpoints';

// mq
export { between, from, until } from './mq/mq';

// palette
export { palette };

// deprecated exports - to be removed in a future major version
export {
	background,
	brandBackground,
	brandAltBackground,
	border,
	brandBorder,
	brandAltBorder,
	line,
	brandLine,
	brandAltLine,
	text,
	brandText,
	brandAltText,
} from './colour/palette';

// deprecated exports - to be removed in a future major version
export const {
	brand,
	brandAlt,
	neutral,
	error,
	success,
	news,
	opinion,
	sport,
	culture,
	lifestyle,
	labs,
	specialReport,
	focus,
} = palette;

// size
export {
	height,
	iconSize,
	remHeight,
	remWidth,
	size,
	width,
} from './size/size';

// space
export { space, remSpace } from './space/space';

// typography
export {
	titlepiece,
	headline,
	body,
	textSans,
	titlepieceSizes,
	headlineSizes,
	bodySizes,
	textSansSizes,
	remTitlepieceSizes,
	remHeadlineSizes,
	remBodySizes,
	remTextSansSizes,
	fonts,
	fontWeights,
	lineHeights,
} from './typography';

export {
	body as bodyObjectStyles,
	headline as headlineObjectStyles,
	textSans as textSansObjectStyles,
	titlepiece as titlepieceObjectStyles,
} from './typography/obj';
export type {
	ScaleUnit,
	Category,
	LineHeight,
	FontWeight,
	FontStyle,
	FontWeightDefinition,
	Option,
	TypographyStyles,
	TypographySizes,
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
	Fs,
	FontScaleFunction,
	FontScaleFunctionStr,
	FontScaleArgs,
} from './typography/types';

// utils
export { appearance } from './utils/supports-queries';
export { FocusStyleManager } from './accessibility/focus-style-manager';
export { pxToRem, rootPixelFontSize } from './utils/px-to-rem';
export { resets } from './utils/resets';
export { svgBackgroundImage } from './utils/svg-background-image';
