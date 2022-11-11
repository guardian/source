import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { focusHalo, space, textSans } from '@guardian/source-foundations';
import { textAreaThemeDefault } from './theme';

const getTextAreaTheme = (supportDarkmode?: boolean) => {
	if (!supportDarkmode) return textAreaThemeDefault.textArea;
	const useDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return useDark
		? textAreaThemeDefault.textAreaDark
		: textAreaThemeDefault.textArea;
};

export const errorInput = (
	supportDarkMode: boolean,
	textArea = getTextAreaTheme(supportDarkMode),
): SerializedStyles => css`
	border: 4px solid ${textArea.borderError};
	color: ${textArea.textError};
	margin-top: 0;
`;

export const successInput = (
	supportDarkMode: boolean,
	textArea = getTextAreaTheme(supportDarkMode),
): SerializedStyles => css`
	border: 4px solid ${textArea.borderSuccess};
	color: ${textArea.textSuccess};
	margin-top: 0;
`;
export const textArea = (
	supportDarkMode: boolean,
	textArea = getTextAreaTheme(supportDarkMode),
): SerializedStyles => css`
	${textSans.medium()};
	box-sizing: border-box;
	color: ${textArea.textUserInput};
	background-color: ${textArea.backgroundInput};
	border: 2px solid ${textArea.border};
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:focus {
		border: 2px solid ${textArea.borderActive};
		${focusHalo};
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${errorInput(supportDarkMode, textArea)}
		}
	}
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
	width: 100%;
`;
