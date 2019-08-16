import { css } from "@emotion/core";
import { textSans } from "@guardian/src-foundations/typography";
import { palette } from "@guardian/src-foundations/palette";
import { size } from "@guardian/src-foundations/size";

export const button = css`
	/* LAYOUT */
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	/* TYPOGRAPHY */
	font-weight: bold;
	text-decoration: none;
	${textSans({ level: 3 })};

	/* STYLES */
	box-sizing: border-box;
	height: ${size.large}px;
	min-height: ${size.large}px;
	padding: 0 ${size.large / 2}px;
	border: none;
	border-radius: ${size.large / 2}px;
	background: transparent;
	cursor: pointer;
	transition: 0.3s ease-in-out;
`;

export const primary = css`
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};

	&:hover,
	&:focus {
		background-color: ${palette.yellow.dark};
	}
`;

export const secondary = css`
	background-color: ${palette.neutral[20]};
	color: ${palette.neutral[100]};

	&:hover,
	&:focus {
		background-color: ${palette.neutral[7]};
	}
`;

export const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`;

export const iconLeft = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`;

export const iconRight = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`;
