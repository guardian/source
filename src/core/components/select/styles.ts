import { css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { height, width } from "@guardian/src-foundations/size";
import { textSans } from "@guardian/src-foundations/typography";
import { focusHalo } from "@guardian/src-foundations/accessibility";
import { selectDefault } from "@guardian/src-foundations/themes";

export const errorInput = ({ select } = selectDefault) => css`
	border: 4px solid ${select.borderError};
	color: ${select.textError};
`;

export const successInput = ({ select } = selectDefault) => css`
	border: 4px solid ${select.borderSuccess};
	color: ${select.textSuccess};
`;

export const errorChevron = ({ select } = selectDefault) => css`
	svg {
		fill: ${select.textError};
	}
`;

export const successChevron = ({ select } = selectDefault) => css`
	svg {
		fill: ${select.textSuccess};
	}
`;

export const selectWrapper = ({ select } = selectDefault) => css`
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

export const select = (theme = selectDefault) => {
	const { select } = theme;

	return css`
		color: ${select.textUserInput};
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		width: 100%;
		${textSans.medium({ lineHeight: "regular" })};
		background-color: ${select.backgroundInput};
		border: 2px solid ${select.border};
		padding-left: ${space[2]}px;

		@supports (appearance: none) {
			appearance: none;
			padding-right: ${space[2]}px;

			& ~ svg {
				display: block;
			}
		}

		&:active {
			border: 2px solid ${select.borderActive};
		}

		&:focus {
			${focusHalo};
		}

		&:invalid {
			${errorInput(theme)};
		}
	`;
};
