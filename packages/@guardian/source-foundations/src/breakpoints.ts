// FYI
// src/core/foundations/src/breakpoints.ts SYMLINKS TO
// packages/@guardian/source-foundations/src/breakpoints.ts

export type Breakpoint =
	| 'mobile'
	| 'mobileMedium'
	| 'mobileLandscape'
	| 'phablet'
	| 'tablet'
	| 'desktop'
	| 'leftCol'
	| 'wide';

export const breakpoints = {
	mobile: 320,
	mobileMedium: 375,
	mobileLandscape: 480,
	phablet: 660,
	tablet: 740,
	desktop: 980,
	leftCol: 1140,
	wide: 1300,
};
