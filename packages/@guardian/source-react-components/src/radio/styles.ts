import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	appearance,
	focusHalo,
	height,
	resets,
	space,
	textSans,
	transitions,
	width,
} from '@guardian/source-foundations';
import { radioThemeDefault } from './theme';

export const fieldset = (
	radio = radioThemeDefault.radio,
): SerializedStyles => css`
	${resets.fieldset};

	&[aria-invalid='true'] input {
		border: 4px solid ${radio.borderError};

		&:not(:checked):hover,
		&:active {
			border: 2px solid ${radio.borderHover};
		}
	}
`;

export const radioContainer = (
	radio = radioThemeDefault.radio,
): SerializedStyles => css`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border-color: ${radio.borderHover};
		}
	}
`;

export const label: SerializedStyles = css`
	cursor: pointer;
`;

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;

export const radio = (radio = radioThemeDefault.radio): SerializedStyles => css`
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 2px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${radio.border};

	&:checked {
		color: ${radio.backgroundChecked};
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (${appearance}) {
		appearance: none;
		background-color: transparent;

		&:after {
			background: currentColor;
			position: absolute;
			content: '';
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`;

export const labelText = (
	radio = radioThemeDefault.radio,
): SerializedStyles => css`
	${textSans.medium()};
	color: ${radio.textLabel};
	width: 100%;
`;

export const labelTextWithSupportingText = css`
	${textSans.medium({ fontWeight: 'bold' })};
`;

export const supportingText = (
	radio = radioThemeDefault.radio,
): SerializedStyles => css`
	${textSans.small()};
	color: ${radio.textLabelSupporting};
`;
