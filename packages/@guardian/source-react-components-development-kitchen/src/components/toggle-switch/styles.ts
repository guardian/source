import { css } from '@emotion/react';
import { neutral, success, textSans } from '@guardian/source-foundations';

export const toggleSwitchStyles = css`
	display: flex;
	align-items: center;
`;

export const buttonStyles = css`
	flex: none;
	border: none;
	margin: 8px;
	margin-left: 0;
	padding: 0;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	position: relative;
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: #fff;
		will-change: left;
		transition: left 0.15s ease-in-out;
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
	https://github.com/guardian/frontend/blob/c2b3103e1796b9b2fc3326e792323dd919d4b85a/static/src/stylesheets/module/content-garnett/_live-blog.scss#L257
 */

export const webStyles = css`
	width: 2.75rem;
	height: 1.5rem;
	border-radius: 15.5px;

	&:before {
		content: '';
		position: absolute;
		top: 0.375rem;
		height: 0.5rem;
		width: 0.25rem;
		opacity: 0;
		border-bottom: 2px solid ${success[400]};
		border-right: 2px solid ${success[400]};
		transition: opacity 0.1s ease-in;
	}

	&:after {
		height: 1.125rem;
		width: 1.125rem;
		top: 0.15625rem;
		left: 0.25rem;
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
		transform: translateX(6px) rotate(45deg);
	}

	&[aria-checked='true']:after {
		left: 1.375rem;
		background: ${neutral[100]};
	}
`;

export const labelStyles = css`
	${textSans.small()};
	display: inline-block;
	color: ${neutral[7]};
`;
