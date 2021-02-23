export * from './animation';
export * from './breakpoints';
export * from './palette';
export * from './space';
export * from './size';
export * from './accessibility';
export * from './typography';
export * from './utils';
// TODO - reevaluate how we want to export things from nested files to the top-level package exports
export { from, until, between } from './mq';

// Avoid importing the entire palette directly in your application. Prefer using the named exports
// defined within the /palette folder
//
// Why?
// 1) The entire palette consists of global + functional colours. This entails importing a lot of
// largely usused or repeated values
// 2) The palette is guaranteed to grow over time, as more components and functional colours are
// added.
//
// Why is it even here?
// Legacy reasons. Also for developer experience when prototyping.

import {
	background,
	border,
	line,
	text,
	brandBackground,
	brandBorder,
	brandLine,
	brandText,
	brandAltBackground,
	brandAltBorder,
	brandAltLine,
	brandAltText,
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
} from './palette';

export const palette = {
	// functional colours (default)
	background,
	border,
	line,
	text,
	// functional colours (brand)
	brandBackground,
	brandBorder,
	brandLine,
	brandText,
	// functional colours (brandAlt)
	brandAltBackground,
	brandAltBorder,
	brandAltLine,
	brandAltText,
	// global colours
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
};
