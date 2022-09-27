import { css } from '@emotion/react';
import { neutral, success, textSans } from '@guardian/source-foundations';
import type { LabelPosition } from './ToggleSwitchApps';

export const buttonStyles = (labelPosition: LabelPosition) => css`
	flex: none;
	border: none;
	margin: ${labelPosition === 'left' ? '0px 0px 0px 8px' : '0px 8px 0px 0px'};
	padding: 0;
	display: inline-block;
	text-align: center;
	position: relative;
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	cursor: pointer;

	&:after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: #fff;
		will-change: left;
		transition: left 0.15s ease-in-out;
	}

	:focus + .tooltiptext {
		display: inline-block;
		opacity: 1;
		visibility: visible;
	}
`;

export const iosStyles = css`
	width: 3.188rem;
	height: 1.938rem;
	border-radius: 15.5px;

	&:after {
		height: 1.688rem;
		width: 1.688rem;
		margin: 2px;
		top: 0;
		left: 0;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.306272);
	}

	&[aria-checked='false'] {
		background-color: rgba(153, 153, 153, 0.5);
	}

	&[aria-checked='true'] {
		background: ${success[500]};
	}

	&[aria-checked='true']:after {
		left: 20px;
		background: ${neutral[100]};
	}
`;

export const androidStyles = css`
	width: 1.625rem;
	height: 0.75rem;
	border-radius: 6px;

	&:after {
		height: 1.125rem;
		width: 1.125rem;
		top: -3px;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
	}

	&[aria-checked='false'] {
		background: rgb(112, 112, 112, 0.5);
	}

	&[aria-checked='false']:after {
		left: -2px;
	}

	&[aria-checked='true'] {
		background: rgba(88, 208, 139, 0.65);
	}

	&[aria-checked='true']:after {
		left: 8px;
		background: ${success[500]};
	}
`;

/**
 * These 'webStyles' are shared with Frontend and will potentially also need updating there if updated here.
 * https://github.com/guardian/frontend/blob/c2b3103e1796b9b2fc3326e792323dd919d4b85a/static/src/stylesheets/module/content-garnett/_live-blog.scss#L257
 */

export const webStyles = css`
	width: 2.75rem;
	height: 1.5rem;
	border-radius: 15.5px;

	/* this will go away when resets have been standardised */
	&:before,
	&:after {
		box-sizing: border-box;
	}

	&:before {
		content: '';
		position: absolute;
		top: 6px;
		height: 11px;
		width: 6px;
		right: 10px;
		opacity: 0;
		border-bottom: 2px solid ${success[400]};
		border-right: 2px solid ${success[400]};
		transform: rotate(45deg);
		transition: opacity 0.1s ease-in;
	}

	&:after {
		height: 18px;
		width: 18px;
		top: 3px;
		left: 4px;
	}

	&[aria-checked='false'] {
		background-color: rgba(153, 153, 153, 0.5);
	}

	&[aria-checked='true'] {
		background: ${success[500]};
	}

	&[aria-checked='true']:before {
		opacity: 1;
		z-index: 1;
	}

	&[aria-checked='true']:after {
		left: 1.375rem;
		background: ${neutral[100]};
	}
`;

export const labelStyles = css`
	${textSans.small()};
	display: flex;
	color: ${neutral[7]};
	align-items: center;
	cursor: pointer;
	user-select: none;
	position: relative;
`;

export const tooltipStyles = css`
	position: absolute;
	visibility: hidden;
	/* display: none; */
	width: 248px;
	top: 40px;
	background-color: #ffffff;
	border: 1px solid rgba(18, 18, 18, 0.25);
	border-radius: 3px;
	padding: 8px;
	z-index: 1;
	opacity: 0;
	transition: 0.7 s opacity;
`;
