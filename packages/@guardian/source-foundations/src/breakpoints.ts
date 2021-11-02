// FYI
// packages/@guardian/src-foundations/src/breakpoints.ts SYMLINKS TO
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

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-v4-source-foundations-media-queries--page#breakpoints) •
 * [Design System](https://theguardian.design/2a1e5182b/p/41be19-grids)
 *
 *	`breakpoints.mobile` -> 320px
 *
 *	`breakpoints.mobileMedium` -> 375px
 *
 *	`breakpoints.mobileLandscape` -> 480px
 *
 *	`breakpoints.phablet` -> 660px
 *
 *	`breakpoints.tablet` -> 740px
 *
 *	`breakpoints.desktop` -> 980px
 *
 *	`breakpoints.leftCol` -> 1140px
 *
 *	`breakpoints.wide` -> 1300px
 *
 */
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
