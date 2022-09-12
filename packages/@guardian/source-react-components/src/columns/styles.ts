import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Breakpoint } from '@guardian/source-foundations';
import { between, from, space, until } from '@guardian/source-foundations';
import type { ColumnsSpaceY } from './Columns';

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

export const collapseBelowColumnsCSS = (
	breakpoint: Breakpoint,
): SerializedStyles => css`
	${until[breakpoint]} {
		display: block;
		margin-right: 0;
		& > * {
			margin-right: 0;
		}
	}
`;

const collapseBelowSpaceYCSS = (spaceY: ColumnsSpaceY): SerializedStyles => css`
	margin-bottom: ${-space[spaceY]}px;
	& > * {
		margin-bottom: ${space[spaceY]}px;
	}
`;

export const collapseBelowSpaceY: {
	[key in ColumnsSpaceY]: SerializedStyles;
} = {
	1: collapseBelowSpaceYCSS(1),
	2: collapseBelowSpaceYCSS(2),
	3: collapseBelowSpaceYCSS(3),
	4: collapseBelowSpaceYCSS(4),
	5: collapseBelowSpaceYCSS(5),
	6: collapseBelowSpaceYCSS(6),
	9: collapseBelowSpaceYCSS(9),
	12: collapseBelowSpaceYCSS(12),
	24: collapseBelowSpaceYCSS(24),
};

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
	const widths = Array.isArray(width) ? width : [width];

	const breakpoints: Breakpoint[] = [
		'mobile',
		'tablet',
		'desktop',
		'leftCol',
		'wide',
	];

	let widthCSS = '';

	for (const [i, width] of widths.entries()) {
		const breakpoint = breakpoints[i];
		if (breakpoint) {
			widthCSS += `
				${from[breakpoint]} {
					${calculateWidth(width)};
				}
			`;
		}
	}

	return widthCSS;
};

const generateSpanCSS = (span: number | number[]) => {
	const spans = Array.isArray(span) ? span : [span];

	const breakpoints: Breakpoint[] = [
		'mobile',
		'tablet',
		'desktop',
		'leftCol',
		'wide',
	];

	let spanCSS = '';

	for (const [i, span] of spans.entries()) {
		const breakpoint = breakpoints[i];

		if (breakpoint) {
			spanCSS += `
				${from[breakpoint]} {
					${calculateSpan(span)};
				}
			`;
		}
	}

	return spanCSS;
};

const columnBreakpoints: ColumnBreakpoint[] = [
	{ totalColumns: 4, rule: until.tablet },
	{ totalColumns: 12, rule: between.tablet.and.leftCol },
	{ totalColumns: 14, rule: between.leftCol.and.wide },
	{ totalColumns: 16, rule: from.wide },
];

const calculateSpan = (span: number) => {
	const columnBreakpointCss = columnBreakpoints.reduce(
		(acc, cur: ColumnBreakpoint) => {
			if (span === 0) {
				// Reduces number of redundant breakpoint rules
				return `
					display: none;
				`;
			}
			const inferredWidth = span / cur.totalColumns;
			const cappedWidth = inferredWidth < 1 ? inferredWidth : 1;
			const cssForBreakpoint = calculateWidth(cappedWidth);

			return `
				${acc}
				${cur.rule} {
					${cssForBreakpoint}
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
	flex: 1;
`;

// width is specified
export const setWidth = (value: number | number[]): SerializedStyles => css`
	${generateWidthCSS(value)};
`;

// span is specified
export const setSpan = (value: number | number[]): SerializedStyles => css`
	${generateSpanCSS(value)}
`;
