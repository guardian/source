import { css } from '@emotion/react';
import {
	focusHalo,
	palette,
	space,
	textSans,
} from '@guardian/source-foundations';

export const errorInput = css`
	border: 4px solid ${palette.error[400]};
	color: ${palette.neutral[7]};
	margin-top: 0;
`;

export const successInput = css`
	border: 4px solid ${palette.success[400]};
	color: ${palette.success[400]};
	margin-top: 0;
`;

export const textArea = css`
	box-sizing: border-box;
	${textSans.medium()};
	color: ${palette.neutral[7]};
	background-color: ${palette.neutral[100]};
	border: 2px solid ${palette.neutral[46]};
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:focus {
		border: 2px solid ${palette.brand[500]};
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
