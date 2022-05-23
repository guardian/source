import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	breakpoints,
	from,
	palette,
	space,
} from '@guardian/source-foundations';

export const container = css`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${space[3]}px;
	width: 100%;
	${from.mobileLandscape} {
		padding: 0 ${space[5]}px;
	}
	${from.tablet} {
		width: ${breakpoints.tablet}px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol}px;
	}
	${from.wide} {
		width: ${breakpoints.wide}px;
	}
	border-color: ${palette.neutral[86]};
`;

export const containerSideBorders = css`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${from.tablet} {
		width: ${breakpoints.tablet + 2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop + 2}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol + 2}px;
	}
	${from.wide} {
		width: ${breakpoints.wide + 2}px;
	}
`;

export const containerTopBorder = css`
	border-top-width: 1px;
	border-top-style: solid;
`;

export const containerBorderColor = (color: string): SerializedStyles => css`
	border-color: ${color};
`;

export const containerBackground = (color: string): SerializedStyles => css`
	background-color: ${color};
`;
