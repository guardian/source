import { css } from '@emotion/react';
import { neutral, success } from '@guardian/src-foundations';

export const toggleSwitchStyles = (isDarkBackground: boolean) => css`
	button {
		border: none;
		margin: 0 8px 0 0;
		padding: 0;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		border-radius: 15px;
		position: relative;
		transition: background 0.15s ease-in-out;
		margin: 8px;
	}

	button:after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: #fff;
		transition: left 0.15s ease-in-out;
		will-change: left;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
			rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
			rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
	}

	button[aria-checked='false'] {
	}
`;

export const mediumStyles = (isDarkBackground: boolean) => css`
	button {
		width: 3.125rem;
		height: 1.875rem;
		transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	}

	button:after {
		height: 1.625rem;
		width: 1.625rem;
		margin: 2px;
		top: 0;
		left: 0;
	}

	button[aria-checked='false'] {
		background-color: ${isDarkBackground
			? 'rgba(255, 255, 255, 0.6)'
			: 'rgba(153, 153, 153, 0.4)'};
	}

	button[aria-checked='true'] {
		background: ${success[500]};
	}

	button[aria-checked='true']:after {
		left: 20px;
		background: ${neutral[100]};
	}
`;
export const slimStyles = (isDarkBackground: boolean) => css`
	button {
		width: 1.625rem;
		height: 0.75rem;
	}

	button:after {
		height: 1.125rem;
		width: 1.125rem;
		top: -3px;
	}

	button[aria-checked='false'] {
		background: rgba(153, 153, 153, 0.4);
	}

	button[aria-checked='false']:after {
		left: -2px;
	}

	button[aria-checked='true'] {
		background: rgba(88, 208, 139, 0.5);
	}

	button[aria-checked='true']:after {
		left: 8px;
		background: ${success[500]};
	}
`;
