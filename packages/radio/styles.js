import { css } from "@emotion/core";
import { textSans } from "@guardian/src-foundations/typography";

export const groupStyles = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const labelStyles = css`
	position: relative;

	${textSans({ level: 3 })};

	cursor: pointer;
`;
export const radioStyles = css`
	position: relative;

	cursor: pointer;
`;
