import { css } from "@emotion/core";
import { textSans } from "@guardian/pasteup/typography";

export const groupStyles = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const labelStyles = css`
	position: relative;

	${textSans(4)};

	cursor: pointer;
`;
export const radioStyles = css`
	position: relative;

	cursor: pointer;
`;
