import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import {
	focusHalo,
	remHeight,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import { expandingWrapperThemeDefault } from './theme';

export const containerStyles = (
	expander = expandingWrapperThemeDefault.expander,
): SerializedStyles => css`
	border-image: repeating-linear-gradient(
			to bottom,
			${expander.border},
			${expander.border} 1px,
			transparent 1px,
			transparent 4px
		)
		13;
	border-top: 13px solid ${expander.border};
	background: ${expander.collapseBackground};
	box-shadow: none;
	position: relative;
	margin-bottom: ${remSpace[9]};

	.expander__checkbox:checked ~ label {
		background: ${expander.collapseBackground};
		color: ${expander.collapseText};
		border: 1px solid ${expander.collapseText};
		#svgminus {
			fill: ${expander.collapseText};
		}
	}
	.expander__checkbox ~ label #svgplus {
		fill: ${expander.expandText};
	}

	.expander__checkbox:checked ~ .expander__collapsible-body {
		max-height: fit-content;
		margin-bottom: ${remSpace[6]};
	}

	.expander__checkbox:focus ~ .expander__collapsible-body {
		${focusHalo};
	}
`;

export const overlayStyles = (
	expander = expandingWrapperThemeDefault.expander,
): SerializedStyles => css`
	background-image: linear-gradient(
		0deg,
		${expander.collapseBackground},
		${expander.collapseBackground} 40%,
		rgba(255, 255, 255, 0)
	);
	height: 5rem;
	position: absolute;
	bottom: 0;
	width: 100%;
	display: block;
`;

export const showHideLabelStyles = (
	expander = expandingWrapperThemeDefault.expander,
): SerializedStyles => css`
	display: inline-flex;
	justify-content: space-between;
	box-shadow: none;
	align-items: center;
	box-sizing: border-box;
	cursor: pointer;
	position: absolute;
	bottom: -${remSpace[6]};
	border-radius: ${remHeight.ctaMedium}rem;
	padding: 0 ${remSpace[5]};
	border: 1px solid ${expander.expandBackground};
	text-decoration: none;
	background: ${expander.expandBackground};
	color: ${expander.expandText};
	height: ${remHeight.ctaMedium}rem;
	min-height: ${remHeight.ctaMedium}rem;
	${textSans.medium({ fontWeight: 'bold' })};
	margin-left: ${remSpace[2]};
`;

export const collapsibleBodyStyles = css`
	margin: 0;
	max-height: 30vh;
	overflow: hidden;
`;

export const buttonIconStyles = css`
	svg {
		display: block;
		width: 1.5rem;
		height: auto;
		margin-left: -${remSpace[1]};
		margin-right: ${remSpace[1]};
	}
`;

export const extraStyles = css`
	display: flex;
	align-items: center;
	padding: 0 ${remSpace[1]};
	position: absolute;
	right: 0;
	margin-top: -${remSpace[6]};
`;
