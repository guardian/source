import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import {
	brand,
	neutral,
	space,
	success,
	textSans,
} from '@guardian/source-foundations';
import type {
	LabelPosition,
	ToggleSwitchFontSize,
	ToggleSwitchFontWeight,
} from './ToggleSwitch';

const toggleBackground = 'rgba(255, 255, 255, 0.4)';
const toggleBorder = 'rgba(255, 255, 255, 0.6)';

/**
 * This colour represents Palette.success[400] with a 40% opacity white overlay.
 * As we're using it for a border we're unable to add an overlay so use a pre-calculated
 * hex value instead.
 */
const toggleBorderGreen = '#A7CFB8';

export const buttonStyles = (
	labelPosition: LabelPosition,
): SerializedStyles => css`
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
		background: ${neutral[100]};
		will-change: left;
		transition: left 0.15s ease-in-out;
	}

	:focus + .tooltiptext {
		opacity: 1;
		visibility: visible;
	}
`;

export const toggleStyles = (format?: ArticleFormat): SerializedStyles => {
	return css`
		width: 44px;
		height: 22px;
		border-radius: 16px;
		box-sizing: unset;

		/* this will go away when resets have been standardised */
		&:before,
		&:after {
			box-sizing: border-box;
		}

		&:before {
			content: '';
			position: absolute;
			top: 5px;
			height: 11px;
			width: 6px;
			right: 10px;
			opacity: 0;
			border-bottom: 2px solid ${success[400]};
			border-right: 2px solid ${success[400]};
			transform: rotate(45deg);
			transition-property: opacity;
			transition-duration: 0.2s;
		}

		&:after {
			height: 18px;
			width: 18px;
			top: 2px;
			left: 4px;
		}

		&[aria-checked='false'] {
			background-color: ${format ? toggleBackground : neutral[46]};
			border: 1px solid ${format ? toggleBorder : neutral[46]};
		}

		&[aria-checked='false']:before {
			transition-delay: 0;
		}

		&[aria-checked='true'] {
			background-color: ${success[400]};
			border: 1px solid ${format ? toggleBorderGreen : success[400]};
		}

		&[aria-checked='true']:before {
			opacity: 1;
			z-index: 1;
			transition-delay: 0.2s;
		}

		&[aria-checked='true']:after {
			left: 22px;
			background: ${neutral[100]};
		}

		&:focus {
			outline: 0;
			html:not(.src-focus-disabled) & {
				outline: 5px solid ${format ? neutral[100] : brand[500]};
				outline-offset: 3px;
			}
		}
	`;
};

export const labelStyles = (
	fontSize: ToggleSwitchFontSize,
	fontWeight: ToggleSwitchFontWeight,
	format?: ArticleFormat,
): SerializedStyles => css`
	${textSans[fontSize]({ fontWeight })};
	color: ${format ? neutral[100] : neutral[7]};
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	user-select: none;
	position: relative;
`;

export const labelBorderStyles = (
	format?: ArticleFormat,
): SerializedStyles => css`
	border-top: 1px solid ${format ? neutral[100] : neutral[46]};
	padding-top: ${space[1]}px;
	width: 100%;
`;

export const tooltipStyles = css`
	position: absolute;
	visibility: hidden;
	width: 248px;
	top: 40px;
	background-color: ${neutral[100]};
	border: 1px solid rgba(18, 18, 18, 0.25);
	border-radius: 3px;
	padding: ${space[2]};
	z-index: 1;
	opacity: 0;
	transition: 0.7s opacity;
`;
