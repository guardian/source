import { css } from "@emotion/core";
import { textSans } from "@guardian/pasteup/typography";

export const groupStyles = css`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
export const labelStyles = css`
	flex: 0 1 auto;
	position: relative;

	${textSans(3)};
	font-weight: bold;

	cursor: pointer;
`;
export const radioStyles = css`
	flex: 0 1 auto;
	position: relative;

	cursor: pointer;
`;
