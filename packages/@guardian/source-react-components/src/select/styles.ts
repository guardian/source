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

export const errorInput = (
	select = selectThemeDefault.select,
): SerializedStyles => css`
	border: 4px solid ${select.borderError};
	color: ${select.textError};
	/* When select is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${select.borderError};
	}
`;

export const successInput = (
	select = selectThemeDefault.select,
): SerializedStyles => css`
	border: 4px solid ${select.borderSuccess};
	color: ${select.textSuccess};
	/* When select is active and in an success state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${select.borderSuccess};
	}
`;

export const errorChevron = (
	select = selectThemeDefault.select,
): SerializedStyles => css`
	svg {
		fill: ${select.textError};
	}
`;

export const successChevron = (
	select = selectThemeDefault.select,
): SerializedStyles => css`
	svg {
		fill: ${select.textSuccess};
	}
`;

export const selectWrapper = (
	select = selectThemeDefault.select,
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

export const select = (select = selectThemeDefault.select): SerializedStyles =>
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
			${errorInput(select)};
		}
	`;
