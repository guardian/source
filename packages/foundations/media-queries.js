import { breakpoints, tweakpoints } from "./theme";

const mediaQueryMinimums = {
	mobileMedium: tweakpoints[0],
	mobileLandscape: tweakpoints[1],
	phablet: tweakpoints[2],
	tablet: breakpoints[0],
	desktop: breakpoints[1],
	leftCol: breakpoints[2],
	wide: breakpoints[3]
};

const minWidth = value => `@media (min-width: ${value}px)`;
const maxWidth = value => `@media (max-width: ${value - 1}px)`;
const minWidthMaxWidth = (from, until) =>
	`@media (min-width: ${`${from}px`}) and (max-width: ${`${until - 1}px`})`;

const mq = ({ from, until }) => {
	if (from && until) {
		return minWidthMaxWidth(
			mediaQueryMinimums[from],
			mediaQueryMinimums[until]
		);
	}
	if (from) {
		return minWidth(mediaQueryMinimums[from]);
	}
	if (until) {
		return maxWidth(mediaQueryMinimums[until]);
	}
};

export { mq };
