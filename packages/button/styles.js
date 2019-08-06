import { css } from "@emotion/core";
import { textSans } from "@guardian/pasteup/typography";
import { palette } from "@guardian/pasteup/palette";

const ctaHeight = 42;

export const styles = css`
	/* LAYOUT */
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	/* TYPOGRAPHY */
	font-weight: bold;
	text-decoration: none;
	${textSans(2)};

	/* STYLES */
	box-sizing: border-box;
	height: ${ctaHeight}px;
	min-height: ${ctaHeight}px;
	padding: 0 ${ctaHeight / 2}px;
	border: none;
	border-radius: ${ctaHeight / 2}px;
	background: transparent;
	cursor: pointer;
	transition: 0.3s ease-in-out;
`;

export const primaryStyles = css`
	background-color: ${palette.highlight.main};
	color: ${palette.neutral[7]};

	&:hover,
	&:focus {
		background-color: ${palette.highlight.dark};
	}
`;

export const secondaryStyles = css`
	background-color: ${palette.neutral[20]};
	color: ${palette.neutral[100]};

	&:hover,
	&:focus {
		background-color: ${palette.neutral[7]};
	}
`;

export const iconStyles = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${ctaHeight / 2}px;
		height: auto;
	}
`;

export const iconLeftStyles = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${ctaHeight / 4}px 0 ${-ctaHeight / 8}px;
	}
`;

export const iconRightStyles = css`
	svg {
		margin: 0 ${-ctaHeight / 8}px 0 ${ctaHeight / 4}px;
	}
`;
