import { css } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { Breakpoint, from, until, between } from '@guardian/src-foundations/mq';

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
		return css`
			width: 0;
			/* Hide the column from screen readers */
			visibility: hidden;
			/* offset the margin-left on the next sibling */
			margin-right: ${-space[5]}px;
		`;
	}

	return css`
		width: calc((100% + ${space[5]}px) * ${width} - ${space[5]}px);
		/* Reset values that might have been set at a lower breakpoint */
		visibility: visible;
		margin-right: 0;
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
			return css`
				${styles}
				${from[breakpoints[i]]} {
					${calculateWidth(w)};
				}
			`;
		}, css``);
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
			return css`
				${styles}
				${from[breakpoints[i]]} {
					${calculateSpan(w)};
				}
			`;
		}, css``);
	}

	return calculateSpan(span);
};

type ColumnBreakpoints = Array<ColumnBreakpoint>;
type ColumnBreakpoint = {
	first?: Breakpoint;
	last?: Breakpoint;
	totalColumns: number;
};

export const columnBreakpoints: ColumnBreakpoints = [
	{ first: undefined, last: 'tablet', totalColumns: 4 },
	{ first: 'tablet', last: 'leftCol', totalColumns: 12 },
	{ first: 'leftCol', last: 'wide', totalColumns: 14 },
	{ first: 'wide', last: undefined, totalColumns: 16 },
];

const calculateSpan = (span: number) => {
	const columnBreakpointCss = columnBreakpoints.reduce(
		(acc: string, cur: ColumnBreakpoint) => {
			// if span == cur.columns then 100%
			if (span >= cur.totalColumns) return `width: 100%; display: block;`;

			// if span == 0 then not visible
			console.log(span);
			if (span === 0) return `display: none;`;

			const inferredWidth = span / cur.totalColumns;
			const cssForBreakpoint = `{ width: calc((100% + ${space[5]}px) * ${inferredWidth} - ${space[5]}px); display: block; }\n`;
			if (cur.first && cur.last) {
				return (
					// Typescript cannot infer that combinations will always be valid
					// eslint-disable-next-line
					// @ts-ignore next-line
					acc + between[cur.first].and[cur.last] + cssForBreakpoint
				);
			}
			if (cur.first) {
				return acc + from[cur.first] + cssForBreakpoint;
			}
			return acc + until[cur.last as Breakpoint] + cssForBreakpoint;
		},
		'',
	);

	console.log(columnBreakpointCss);

	return css`
		box-sizing: border-box;
		flex: ${span ? '0 0 auto' : 1};
		${columnBreakpointCss}
	`;
};

export const column = (width?: number | number[], span?: number | number[]) => {
	if (!width && (span || span === 0)) {
		return generateSpanCSS(span);
	}

	let flex;
	let widthCSS;

	if (width == null || (Array.isArray(width) && width.length === 0)) {
		// If no width is specified, allow the column to grow
		flex = 1;
		widthCSS = css``;
	} else {
		// If a width is specified, don't allow column to grow. Use the width property
		flex = '0 0 auto';
		widthCSS = generateWidthCSS(width);
	}

	return css`
		box-sizing: border-box;
		flex: ${flex};
		${widthCSS};
	`;
};
