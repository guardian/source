import { css } from '@emotion/react';
import {
	background,
	border,
	focusHalo,
	resets,
	space,
	text,
	textSans,
} from '@guardian/source-foundations';

export const errorInput = css`
	border: 4px solid ${border.error};
	color: ${text.inputError};
	margin-top: 0;
	/* When input is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 4px solid ${border.error};
	}
`;

export const textArea = css`
	${resets.input};
	box-sizing: border-box;
	${textSans.medium({ lineHeight: 'regular' })};
	color: ${text.userInput};
	background-color: ${background.input};
	border: 2px solid ${border.input};
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:active {
		border: 2px solid ${border.inputActive};
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${errorInput}
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
