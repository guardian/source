import React from "react";
import { SvgArrowRightStraight } from "@guardian/src-svgs/arrow-right-straight";
import { styles, primaryStyles, secondaryStyles, iconStyles } from "./styles";

const appearanceStyles = {
	primary: primaryStyles,
	secondary: secondaryStyles
};
const Button = ({ appearance, icon, iconSide, children, ...props }) => {
	return (
		<button
			css={[styles, appearanceStyles[appearance], iconStyles]}
			{...props}
		>
			{[children, icon]}
		</button>
	);
};
const appearances = Object.keys(appearanceStyles);
const sides = ["left", "right"];
const defaultProps = {
	"aria-label": null,
	type: "button",
	disabled: false,
	icon: <SvgArrowRightStraight />,
	appearance: appearances[0],
	iconSide: sides[0]
};

Button.defaultProps = { ...defaultProps };

export { Button, appearances };
