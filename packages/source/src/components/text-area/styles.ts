import { css } from '@emotion/react';
import { space } from '../../foundations/src';
import { textSans } from '../../foundations/src/typography';
import { focusHalo } from '../../foundations/src/accessibility';
import { text, border, background } from '../../foundations/src/palette';
import { resets } from '../../foundations/src/utils';

export const errorInput = css`
	border: 4px solid ${border.error};
	color: ${text.error};
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

export const widthFluid = css`
	width: 100%;
`;
