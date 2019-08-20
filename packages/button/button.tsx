import React, { ReactElement, ReactNode } from "react";
import { SvgArrowRightStraight } from "@guardian/src-svgs/arrow-right-straight.esm";
import {
	button,
	primary,
	secondary,
	icon,
	iconLeft,
	iconRight
} from "./styles";

const appearanceStyles = {
	primary: primary,
	secondary: secondary
};
const iconSideStyles = {
	right: iconLeft,
	left: iconRight
};
const Button = ({
	appearance,
	icon: iconSvg,
	iconSide,
	children,
	...props
}: {
	appearance: "primary" | "secondary";
	icon: ReactElement;
	iconSide: "left" | "right";
	children: ReactNode;
}) => {
	return (
		<button
			css={[
				button,
				appearanceStyles[appearance],
				icon,
				iconSideStyles[iconSide]
			]}
			{...props}
		>
			{[children, React.cloneElement(iconSvg, { key: "svg" })]}
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
