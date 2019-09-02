import { breakpoints, tweakpoints } from "./theme";

type MediaQuery =
	| "mobileMedium"
	| "mobileLandscape"
	| "phablet"
	| "tablet"
	| "desktop"
	| "leftCol"
	| "wide";

const tweakAndBreakpoints = tweakpoints.concat(breakpoints);

const mediaQueryMinimums: { [mediaQuery in MediaQuery]: number } = {
	mobileMedium: tweakAndBreakpoints[0],
	mobileLandscape: tweakAndBreakpoints[1],
	phablet: tweakAndBreakpoints[2],
	tablet: tweakAndBreakpoints[3],
	desktop: tweakAndBreakpoints[4],
	leftCol: tweakAndBreakpoints[5],
	wide: tweakAndBreakpoints[6]
};

const minWidth = (value: number) => `@media (min-width: ${value}px)`;
const maxWidth = (value: number) => `@media (max-width: ${value - 1}px)`;
const minWidthMaxWidth = (from: number, until: number) =>
	`@media (min-width: ${`${from}px`}) and (max-width: ${`${until - 1}px`})`;

const mq = ({ from, until }: { from: MediaQuery; until: MediaQuery }) => {
	if (from && until) {
		return minWidthMaxWidth(
			mediaQueryMinimums[from],
			mediaQueryMinimums[until]
		);
	}
	if (from) {
		return minWidth(mediaQueryMinimums[from]);
	}

	return maxWidth(mediaQueryMinimums[until]);
};

const [
	mobileMedium,
	mobileLandscape,
	phablet,
	tablet,
	desktop,
	leftCol,
	wide
] = tweakAndBreakpoints.map(minWidth);

export {
	mq,
	mobileMedium,
	mobileLandscape,
	phablet,
	tablet,
	desktop,
	leftCol,
	wide
};
