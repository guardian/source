import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	focusHalo,
	from,
	headline,
	remSpace,
	space,
	textSans,
	transitions,
	until,
	visuallyHidden,
} from '@guardian/source-foundations';
import { accordionThemeDefault } from './theme';

export const accordion = (
	accordion = accordionThemeDefault.accordion,
): SerializedStyles => css`
	border-bottom: 1px solid ${accordion.borderPrimary};
`;

export const accordionRow = (
	accordion = accordionThemeDefault.accordion,
): SerializedStyles => css`
	border-top: 1px solid ${accordion.borderPrimary};
`;

const buttonStyles = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${remSpace[2]} 0 ${remSpace[6]} 0;
	cursor: pointer;
`;

export const button = (
	accordion = accordionThemeDefault.accordion,
): SerializedStyles => css`
	${buttonStyles};
	color: ${accordion.textPrimary};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	text-align: left;

	&:focus div {
		${focusHalo};
	}
`;

export const noJsButton = (
	accordion = accordionThemeDefault.accordion,
): SerializedStyles => css`
	${buttonStyles};
	color: ${accordion.textPrimary};
`;

export const labelText = css`
	${headline.xxxsmall({ fontWeight: 'bold' })};
	margin-right: ${remSpace[4]};
`;

const expandedBodyStyles = css`
	/*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
	max-height: 500px;
	transition: max-height ${transitions.medium};
	overflow: hidden;
	height: auto;
`;

export const expandedBody = css`
	${expandedBodyStyles};
`;

export const collapsedBodyStyles = css`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${transitions.short};
	*/
	overflow: hidden;
`;
export const collapsedBody = css`
	${collapsedBodyStyles};
`;

export const noJsInput = css`
	${visuallyHidden};

	&:focus + [data-target='label'] > [data-target='toggle'] {
		${focusHalo};
	}

	&:not(:checked) ~ [data-target='body'] {
		${collapsedBodyStyles};
		display: none;
	}

	&:checked ~ [data-target='body'] {
		${expandedBodyStyles};
	}

	&:not(:checked) + [data-target='label'] [data-target='toggle-label-hide'] {
		display: none;
	}

	&:checked + [data-target='label'] [data-target='toggle-label-show'] {
		display: none;
	}
`;

export const toggle = css`
	width: auto;
	display: flex;
	align-items: center;
`;

export const toggleLabel = css`
	${textSans.small({ fontWeight: 'bold' })};

	${until.tablet} {
		${visuallyHidden}
	}
`;
const chevronIcon = css`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${from.tablet} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${remSpace[1]};
		transition: ${transitions.short};
	}
`;

export const chevronIconDown = css`
	${chevronIcon};
	svg {
		transform: translate(0, 0);
		transition: transform ${transitions.short};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${space[1] / 2}px);
		}
	}
`;

export const chevronIconUp = css`
	${chevronIcon};
	svg {
		transform: rotate(180deg);
		transition: transform ${transitions.short};
	}
`;

export const toggleIconWithLabel = css`
	svg {
		width: 18px;
		height: 18px;
	}
`;
