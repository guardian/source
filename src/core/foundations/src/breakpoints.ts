import { breakpoints as _breakpoints, tweakpoints } from './theme';

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
	mobile: tweakpoints[0],
	mobileMedium: tweakpoints[1],
	mobileLandscape: tweakpoints[2],
	phablet: tweakpoints[3],
	tablet: _breakpoints[0],
	desktop: _breakpoints[1],
	leftCol: _breakpoints[2],
	wide: _breakpoints[3],
};
