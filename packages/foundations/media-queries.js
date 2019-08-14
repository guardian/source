import { breakpoints } from "./theme";

const mediaQueryMinimums = {
	mobile: breakpoints[0],
	mobileMedium: breakpoints[1],
	mobileLandscape: breakpoints[2],
	phablet: breakpoints[3],
	tablet: breakpoints[4],
	desktop: breakpoints[5],
	leftCol: breakpoints[6],
	wide: breakpoints[7]
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
