import { css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { until } from "@guardian/src-foundations/mq";

export const columns = css`
	box-sizing: border-box;
	display: flex;
	& > * + * {
		margin-left: ${space[5]}px;
	}
`;

const collapseBelowSpacing = css`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${space[5]}px;
	}
`;

export const collapseBelowTabletColumns = css`
	${until.tablet} {
		${collapseBelowSpacing}
	}
`;
export const collapseBelowDesktopColumns = css`
	${until.desktop} {
		${collapseBelowSpacing}
	}
`;
export const collapseBelowLeftColColumns = css`
	${until.leftCol} {
		${collapseBelowSpacing}
	}
`;
export const collapseBelowWideColumns = css`
	${until.wide} {
		${collapseBelowSpacing}
	}
`;

const collapseBelowWidth = css`
	width: 100% !important;
`;

export const collapseBelowTablet = css`
	& > * {
		${until.tablet} {
			${collapseBelowWidth}
		}
	}
`;
export const collapseBelowDesktop = css`
	& > * {
		${until.desktop} {
			${collapseBelowWidth}
		}
	}
`;
export const collapseBelowleftCol = css`
	& > * {
		${until.leftCol} {
			${collapseBelowWidth}
		}
	}
`;
export const collapseBelowWide = css`
	& > * {
		${until.wide} {
			${collapseBelowWidth}
		}
	}
`;

export const column = (width: number) => css`
	box-sizing: border-box;
	/* If a width is specified, don't allow column to grow. Use the width property */
	flex: ${width ? "0 0 auto" : 1};
	/*
		A set of Columns has n columns and n-1 gutters:
		|    |g|    |g|    |g|    |
		This means if we take a simple fraction of the width of the set of Columns,
		our Column will stop part-way through a gutter:
		|    |g|    |g|    |g|    |
		|====50%=====|====50%=====|
		To calculate width of a Column correctly, we must add an imaginary extra gutter
		and take a fraction of the whole:
		|    |g|    |g|    |g|    |g|
		|=====50%=====||====50%=====|
		This will create a Column which is x columns and x gutters wide. We really want the
		Column to be x columns and x-1 gutters, so we must subtract a gutter at the end:
		|    |g|    |g|    |g|    |g|
		|====50%====| |====50%====|
	 */
	${width
		? `width: calc((100% + ${space[5]}px) * ${width} - ${space[5]}px);`
		: ""}
`;
