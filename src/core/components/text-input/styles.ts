import { css } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { height } from '@guardian/src-foundations/size';
import { textSans } from '@guardian/src-foundations/typography';
import { focusHalo } from '@guardian/src-foundations/accessibility';
import { textInputDefault } from '@guardian/src-foundations/themes';
import { resets } from '@guardian/src-foundations/utils';

export const errorInput = ({ textInput } = textInputDefault) => css`
	border: 4px solid ${textInput.borderError};
	color: ${textInput.textError};
	margin-top: 0;
`;

export const successInput = ({ textInput } = textInputDefault) => css`
	border: 4px solid ${textInput.borderSuccess};
	color: ${textInput.textSuccess};
	margin-top: 0;
`;

export const textInput = (theme = textInputDefault) => {
	const { textInput } = theme;

	return css`
		${resets.input};
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		${textSans.medium({ lineHeight: 'regular' })};
		color: ${textInput.textUserInput};
		background-color: ${textInput.backgroundInput};
		border: 2px solid ${textInput.border};
		padding: 0 ${space[2]}px;

		&:active {
			border: 2px solid ${textInput.borderActive};
		}

		&:focus {
			${focusHalo};
		}

		&:invalid {
			/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
			&[value]:not([value='']) {
				${errorInput(theme)};
			}
		}
	`;
};

export const labelMargin = css`
	margin-top: ${space[1]}px;
`;

export const supportingTextMargin = css`
	margin-top: 6px;
`;

export const widthFluid = css`
	width: 100%;
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
