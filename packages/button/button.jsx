import React from "react";
import { SvgArrowRightStraight } from "@guardian/src-svgs/arrow-right-straight";
import {
	styles,
	primaryStyles,
	secondaryStyles,
	iconStyles,
	iconLeftStyles,
	iconRightStyles
} from "./styles";

const appearanceStyles = {
	primary: primaryStyles,
	secondary: secondaryStyles
};
const iconSideStyles = {
	right: iconRightStyles,
	left: iconLeftStyles
};
const Button = ({ appearance, icon, iconSide, children, ...props }) => {
	return (
		<button
			css={[
				styles,
				appearanceStyles[appearance],
				iconStyles,
				iconSideStyles[iconSide]
			]}
			{...props}
		>
			{[children, icon]}
		</button>
	);
};
const appearances = Object.keys(appearanceStyles);
const iconSides = Object.keys(iconSideStyles);
const defaultProps = {
	"aria-label": null,
	type: "button",
	disabled: false,
	icon: <SvgArrowRightStraight />,
	appearance: appearances[0],
	iconSide: iconSides[0]
};

Button.defaultProps = { ...defaultProps };

export { Button, appearances, iconSides };
