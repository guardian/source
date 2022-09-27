import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticlePillar, ArticleSpecial } from '@guardian/libs';
import {
	culture,
	labs,
	lifestyle,
	neutral,
	news,
	opinion,
	space,
	specialReport,
	sport,
	success,
	textSans,
} from '@guardian/source-foundations';
import type {
	LabelPosition,
	ToggleSwitchFontSize,
	ToggleSwitchFontWeight,
} from './ToggleSwitch';

export const decideTickColor = (format?: ArticleFormat): string => {
	if (format) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[200];
			case ArticlePillar.Culture:
				return culture[200];
			case ArticlePillar.Lifestyle:
				return lifestyle[200];
			case ArticlePillar.Sport:
				return sport[100];
			case ArticlePillar.Opinion:
				return opinion[200];
			case ArticleSpecial.Labs:
				return labs[200];
			case ArticleSpecial.SpecialReport:
				return specialReport[200];
			default:
				return news[200];
		}
	}
	return success[400];
};

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

	:focus + .show-tooltip {
		display: inline-block;
		opacity: 1;
	}
`;

/**
 * These 'webStyles' are shared with Frontend and will potentially also need updating there if updated here.
 */
export const toggleStyles = (format?: ArticleFormat): SerializedStyles => css`
	width: 44px;
	height: 24px;
	border-radius: 16px;
	border: 1px solid ${format ? 'rgba(255, 255, 255, 0.4)' : neutral[46]};
	box-sizing: unset;

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
		border-bottom: 2px solid ${decideTickColor(format)};
		border-right: 2px solid ${decideTickColor(format)};
		transform: rotate(45deg);
		transition-property: opacity;
		transition-duration: 0.2s;
	}

	&:after {
		height: 18px;
		width: 18px;
		top: 3px;
		left: 4px;
	}

	&[aria-checked='false'] {
		background-color: ${format ? 'rgba(255, 255, 255, 0.4)' : neutral[46]};
	}

	&[aria-checked='false']:before {
		transition-delay: 0;
	}

	&[aria-checked='true'] {
		background-color: ${format ? 'rgba(255, 255, 255, 0.4)' : success[400]};
	}

	&[aria-checked='true']:before {
		opacity: 1;
		z-index: 1;
		transition-delay: 0.2s;
	}

	&[aria-checked='true']:after {
		left: 1.375rem;
		background: ${neutral[100]};
	}
`;

export const iosToggleStyles = (
	format?: ArticleFormat,
): SerializedStyles => css`
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
		background-color: ${format ? 'rgba(255, 255, 255, 0.5)' : neutral[46]};
	}

	&[aria-checked='true'] {
		background-color: ${format ? success[500] : success[400]};
	}

	&[aria-checked='true']:after {
		background-color: ${neutral[100]};
		left: 20px;
	}
`;

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

export const tooltipStyles: SerializedStyles = css`
	position: absolute;
	display: none;
	width: 248px;
	top: 40px;
	background-color: ${neutral[100]};
	border: 1px solid rgba(18, 18, 18, 0.25);
	border-radius: 3px;
	padding: 8px;
	z-index: 1;
	opacity: 0;
	transition: 0.7s opacity;
`;
