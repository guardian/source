import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	focusHalo,
	height,
	resets,
	space,
	textSans,
} from '@guardian/source-foundations';
import { textInputThemeDefault } from '@guardian/source-react-components';

export const inputWrapper = css`
	display: flex;
	width: 100%;
	&:focus-within {
		${focusHalo};
	}
`;

export const errorInput = (
	textInput = textInputThemeDefault.textInput,
): SerializedStyles => css`
	border: 4px solid ${textInput.borderError};
	color: ${textInput.textError};
	margin-top: 0;
	/* When input is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${textInput.borderError};
	}
`;

export const successInput = (
	textInput = textInputThemeDefault.textInput,
): SerializedStyles => css`
	border: 4px solid ${textInput.borderSuccess};
	color: ${textInput.textSuccess};
	margin-top: 0;
	/* When input is active and in a success state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${textInput.borderSuccess};
	}
`;

export const textInput = (
	textInput = textInputThemeDefault.textInput,
): SerializedStyles =>
	css`
		${resets.input};
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		${textSans.medium()};
		color: ${textInput.textUserInput};
		background-color: ${textInput.backgroundInput};
		border: 2px solid ${textInput.border};
		padding: 0 ${space[2]}px;

		&:active {
			border: 2px solid ${textInput.borderActive};
		}

		&:focus {
			/* Focus outline is provided on the wrapper */
			outline: none;
		}

		&:invalid {
			/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
			&[value]:not([value='']) {
				${errorInput(textInput)};
			}
		}
	`;

export const hasExtensions = (prefix?: string, suffix?: string) => css`
	${prefix && 'border-left: none;'}
	${suffix && 'border-right: none;'}
`;

export const inputPrefix = (input = textInputThemeDefault.textInput) => css`
	${textInput(input)}
	display: inline-flex;
	align-items: center;
	padding-right: ${space[1]}px;
	border-right: none;
`;

export const inputSuffix = (input = textInputThemeDefault.textInput) => css`
	${textInput(input)}
	display: inline-flex;
	align-items: center;
	padding-left: 0;
	border-left: none;
`;

export const labelMargin = css`
	margin-top: ${space[1]}px;
`;

export const supportingTextMargin = css`
	margin-top: 6px;
`;

export const inlineMessageMargin = css`
	margin-top: 2px;
`;

export const widthFluid = css`
	flex-grow: 1;
`;

export const width30 = css`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`;

export const width10 = css`
	width: 18ex;
`;

export const width4 = css`
	width: 9ex;
`;
