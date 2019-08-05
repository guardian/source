import React from "react";
import { css } from "@emotion/core";
import { textSans } from "@guardian/pasteup/typography";
import { palette } from "@guardian/pasteup/palette";

const appearances = {
	primary: "primary",
	secondary: "secondary"
};

const sides = {
	right: "right",
	left: "left"
};

const ctaHeight = "42px";

const getAppearance = appearance => {
	let backgroundColor;
	let color;
	let hoverBackgroundColor;

	if (appearance === "primary") {
		backgroundColor = palette.highlight.main;
		hoverBackgroundColor = palette.highlight.dark;
		color = palette.neutral[7];
	} else if (appearance === "secondary") {
		backgroundColor = palette.neutral[20];
		hoverBackgroundColor = palette.neutral[7];
		color = palette.neutral[100];
	}

	return css`
		background-color: ${backgroundColor};
		color: ${color};

		&:hover,
		&:focus {
			background-color: ${hoverBackgroundColor};
		}
	`;
};

const buttonStyles = appearance =>
	css`
		${textSans(2)};
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		font-weight: bold;
		height: ${ctaHeight};
		min-height: ${ctaHeight};
		padding: 0 (${ctaHeight} / 2);
		border: none;
		border-radius: ${ctaHeight} / 2;
		box-sizing: border-box;
		background: transparent;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		justify-content: space-between;
		position: relative;
		${getAppearance(appearance)};
	`;

const Button = ({ appearance, icon, iconSide, children, ...props }) => {
	return (
		<button css={buttonStyles(appearance)} {...props}>
			{children}
		</button>
	);
};

const defaultProps = {
	"aria-label": null,
	type: "button",
	disabled: false,
	icon: null,
	appearance: Object.keys(appearances)[0],
	iconSide: Object.keys(sides)[0]
};

Button.defaultProps = { ...defaultProps };

export { Button };
