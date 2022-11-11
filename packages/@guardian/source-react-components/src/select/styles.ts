import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	appearance,
	focusHalo,
	height,
	space,
	textSans,
	width,
} from '@guardian/source-foundations';
import { selectThemeDefault } from './theme';

const getSelectTheme = (supportDarkmode?: boolean) => {
	if (!supportDarkmode) return selectThemeDefault.select;
	const useDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return useDark ? selectThemeDefault.selectDark : selectThemeDefault.select;
};

export const errorInput = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles => css`
	border: 4px solid ${select.borderError};
	color: ${select.textError};
	/* When select is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${select.borderError};
	}
`;

export const successInput = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles => css`
	border: 4px solid ${select.borderSuccess};
	color: ${select.textSuccess};
	/* When select is active and in an success state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${select.borderSuccess};
	}
`;

export const errorChevron = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles => css`
	svg {
		fill: ${select.textError};
	}
`;

export const successChevron = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles => css`
	svg {
		fill: ${select.textSuccess};
	}
`;

export const selectWrapper = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles => css`
	position: relative;

	svg {
		display: none;
		position: absolute;
		right: ${space[3]}px;
		top: ${space[2]}px;
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
		fill: ${select.textUserInput};
		pointer-events: none;
	}
`;

export const select = (
	supportDarkMode: boolean,
	select = getSelectTheme(supportDarkMode),
): SerializedStyles =>
	css`
		color: ${select.textUserInput};
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		width: 100%;
		${textSans.medium()};
		background-color: ${select.backgroundInput};
		border: 2px solid ${select.border};
		padding-left: ${space[2]}px;

		@supports (${appearance}) {
			appearance: none;
			padding-right: ${space[2]}px;

			& ~ svg {
				display: block;
			}
		}

		&:focus {
			border: 2px solid ${select.borderActive};
			${focusHalo};
		}

		&:invalid {
			${errorInput(supportDarkMode, select)};
		}
	`;
