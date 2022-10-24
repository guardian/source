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

export const labelStyles = css`
	${textSans.small()};
	display: flex;
	color: ${neutral[7]};
	align-items: center;
	cursor: pointer;
	user-select: none;
	position: relative;
`;
