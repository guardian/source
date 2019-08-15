import { breakpoints } from "./theme";

const mediaQueryMinimums = {
	tablet: breakpoints[1],
	desktop: breakpoints[2],
	leftCol: breakpoints[3],
	wide: breakpoints[4]
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
