import React, { ReactElement, ReactNode } from "react"
import {
	button,
	primaryLight,
	tertiaryLight,
	secondaryLight,
	primaryDark,
	tertiaryDark,
	secondaryDark,
	primaryBlue,
	tertiaryBlue,
	secondaryBlue,
	primaryYellow,
	tertiaryYellow,
	secondaryYellow,
	defaultSize,
	smallSize,
	iconDefault,
	iconSmall,
	iconLeft,
	iconRight,
	iconOnlyDefault,
	iconOnlySmall,
} from "./styles"
import { Appearance } from "@guardian/src-helpers"

type Priority = "primary" | "secondary" | "tertiary"
type IconSide = "left" | "right"
type Size = "default" | "small"

const prioritiesLight: {
	[key in Priority]: any
} = {
	primary: primaryLight,
	secondary: secondaryLight,
	tertiary: tertiaryLight,
}
const prioritiesDark: {
	[key in Priority]: any
} = {
	primary: primaryDark,
	secondary: secondaryDark,
	tertiary: tertiaryDark,
}
const prioritiesBlue: {
	[key in Priority]: any
} = {
	primary: primaryBlue,
	secondary: secondaryBlue,
	tertiary: tertiaryBlue,
}
const prioritiesYellow: {
	[key in Priority]: any
} = {
	primary: primaryYellow,
	secondary: secondaryYellow,
	tertiary: tertiaryYellow,
}
const appearances: {
	[key in Appearance]: any
} = {
	light: prioritiesLight,
	dark: prioritiesDark,
	blue: prioritiesBlue,
	yellow: prioritiesYellow,
}
const iconSides: {
	[key in IconSide]: any
} = {
	right: iconLeft,
	left: iconRight,
}
const sizes: {
	[key in Size]: any
} = {
	default: defaultSize,
	small: smallSize,
}
const iconSizes: {
	[key in Size]: any
} = {
	default: iconDefault,
	small: iconSmall,
}
const iconOnlySizes: {
	[key in Size]: any
} = {
	default: iconOnlyDefault,
	small: iconOnlySmall,
}
const Button = ({
	appearance,
	priority,
	size,
	icon: iconSvg,
	iconSide,
	children,
	...props
}: {
	appearance: Appearance
	priority: Priority
	size: Size
	icon?: ReactElement
	iconSide?: IconSide
	onClick?: () => void
	children?: ReactNode
}) => {
	const buttonContents = [children]

	if (iconSvg) {
		buttonContents.push(React.cloneElement(iconSvg, { key: "svg" }))
	}

	return (
		<button
			css={[
				button,
				sizes[size],
				appearances[appearance][priority],
				iconSvg ? iconSizes[size] : "",
				iconSide ? iconSides[iconSide] : "",
				!children ? iconOnlySizes[size] : "",
			]}
			{...props}
		>
			{buttonContents}
		</button>
	)
}
const defaultProps = {
	type: "button",
	appearance: "light",
	priority: "primary",
	size: "default",
}

Button.defaultProps = { ...defaultProps }

export { Button }
