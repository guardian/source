import React from "react";
import { styles, primaryStyles, secondaryStyles } from "./styles";

const appearanceStyles = {
	primary: primaryStyles,
	secondary: secondaryStyles
};
const Button = ({ appearance, icon, iconSide, children, ...props }) => {
	return (
		<button css={[styles, appearanceStyles[appearance]]} {...props}>
			{children}
		</button>
	);
};
const appearances = Object.keys(appearanceStyles);
const sides = ["left", "right"];
const defaultProps = {
	"aria-label": null,
	type: "button",
	disabled: false,
	icon: null,
	appearance: appearances[0],
	iconSide: sides[0]
};

Button.defaultProps = { ...defaultProps };

export { Button, appearances };
