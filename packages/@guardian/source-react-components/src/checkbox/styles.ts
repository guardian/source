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
import { checkboxThemeDefault } from './theme';

export const fieldset = css`
	${resets.fieldset};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const checkboxContainer = (
	checkbox = checkboxThemeDefault.checkbox,
	error = false,
): SerializedStyles => css`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border-color: ${error ? checkbox.borderError : checkbox.borderHover};
		}
	}
	&:active {
		input {
			border-color: ${checkbox.borderHover};
		}
	}
`;

export const label: SerializedStyles = css`
	cursor: pointer;
`;

export const checkboxContainerWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;

export const checkbox = (
	checkbox = checkboxThemeDefault.checkbox,
	error = false,
): SerializedStyles => css`
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 2px solid currentColor;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;
	color: ${checkbox.border};

	&:focus {
		${focusHalo};
	}

	@supports (${appearance}) {
		appearance: none;
		&:checked {
			border: ${error
				? `4px solid ${checkbox.borderError}`
				: `2px solid ${checkbox.borderChecked}`};
			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${textSans.xlarge()};
				color: ${checkbox.textIndeterminate};
				content: '-';
				position: absolute;
				top: -${space[2]}px;
				left: 5px;
				z-index: 5;
			}
		}
	}
`;

export const labelText = (
	checkbox = checkboxThemeDefault.checkbox,
): SerializedStyles => css`
	${textSans.medium()};
	color: ${checkbox.textLabel};
	width: 100%;
`;

export const labelTextWithSupportingText = css`
	${textSans.medium()};
`;

export const supportingText = (
	checkbox = checkboxThemeDefault.checkbox,
): SerializedStyles => css`
	${textSans.small()};
	color: ${checkbox.textLabelSupporting};
`;

export const tick = (
	checkbox = checkboxThemeDefault.checkbox,
): SerializedStyles => css`
	@supports (
		(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)
	) {
		/* overall positional properties */
		position: absolute;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		/*
			these properties are very sensitive and are overridden
			if the checkbox has a label or supporting text
		*/
		top: 14px;
		left: 9px;
		/*
			this prevents simulated click events to the checkbox, eg from Selenium tests
			from being intercepted by the tick
		*/
		pointer-events: none;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${checkbox.backgroundChecked};
			transition: all ${transitions.short} ease-in-out;
			content: '';
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`;

export const tickWithLabelText = css`
	@supports (${appearance}) {
		top: 15px;
		left: 9px;
	}
`;

export const tickWithSupportingText = css`
	@supports (${appearance}) {
		top: 5px;
	}
`;

export const errorCheckbox = (
	checkbox = checkboxThemeDefault.checkbox,
): SerializedStyles => css`
	border: 4px solid ${checkbox.borderError};

	&:not(:checked):hover,
	&:active {
		border: 2px solid ${checkbox.borderHover};
	}
`;
