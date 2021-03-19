import { css } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { Breakpoint, from, until, between } from '@guardian/src-foundations/mq';

type ColumnBreakpoint = {
	totalColumns: number;
	rule: string;
};

export const columns = css`
	box-sizing: border-box;
	display: flex;
	margin-right: -${space[5]}px;
	& > * {
		margin-right: ${space[5]}px;
	}
`;

const collapseBelowSpacing = css`
	display: block;
	margin-right: 0;
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
const calculateWidth = (width: number) => {
	if (width === 0) {
		return `
			display: none;
		`;
	}

	return `
		width: calc((100%) * ${width} - ${space[5]}px);

		/* Reset value that might have been set at a lower breakpoint */
		display: block;
	`;
};

const generateWidthCSS = (width: number | number[]) => {
	if (Array.isArray(width)) {
		const breakpoints: Breakpoint[] = [
			'mobile',
			'tablet',
			'desktop',
			'leftCol',
			'wide',
		];

		return width.reduce((styles, w, i) => {
			return `
				${styles}
				${from[breakpoints[i]]} {
					${calculateWidth(w)};
				}
			`;
		}, ``);
	}

	return calculateWidth(width);
};

const generateSpanCSS = (span: number | number[]) => {
	if (Array.isArray(span)) {
		const breakpoints: Breakpoint[] = [
			'mobile',
			'tablet',
			'desktop',
			'leftCol',
			'wide',
		];

		return span.reduce((styles, w, i) => {
			return `
				${styles}
				${from[breakpoints[i]]} {
					${calculateSpan(w)};
				}
			`;
		}, ``);
	}

	return calculateSpan(span);
};

const columnBreakpoints: Array<ColumnBreakpoint> = [
	{ totalColumns: 4, rule: until.tablet },
	{ totalColumns: 12, rule: between.tablet.and.leftCol },
	{ totalColumns: 14, rule: between.leftCol.and.wide },
	{ totalColumns: 16, rule: from.wide },
];

const calculateSpan = (span: number) => {
	const columnBreakpointCss = columnBreakpoints.reduce(
		(acc, cur: ColumnBreakpoint) => {
			const inferredWidth = span / cur.totalColumns;
			const cappedWidth = inferredWidth < 1 ? inferredWidth : 1;
			const cssForBreakpoint = calculateWidth(cappedWidth);

			return `
				${acc};
				${cur.rule} {
					${cssForBreakpoint};
				}
			`;
		},
		``,
	);

	return `
		${columnBreakpointCss}
	`;
};

// always gets applied
export const column = css`
	box-sizing: border-box;
`;

// get applied when no width or span is specified
export const flexGrow = css`
	flex: 1 0 0;
`;

// width is specified
export const setWidth = (value: number | number[]) => css`
	/* flex: 0 0 auto; */
	${generateWidthCSS(value)};
`;

// span is specified
export const setSpan = (value: number | number[]) => css`
	/* flex: 0 0 auto; */
	${generateSpanCSS(value)};
`;
