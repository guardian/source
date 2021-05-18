import { css } from '@emotion/react';
import { breakpoints, space } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import { border } from '@guardian/src-foundations/palette';

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
`;

export const containerSideBorders = (color?: string) => css`
	border-left-style: solid;
	border-right-style: solid;
	border-left-color: ${color || border.secondary};
	border-right-color: ${color || border.secondary};
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

export const containerTopBorder = (color: string) => css`
	border-top: 1px solid ${color};
`;

export const containerBackground = (color: string) => css`
	background-color: ${color};
`;
