import React, { ReactElement, ReactNode } from "react"
import {
	button,
	highPriorityLight,
	lowPriorityLight,
	moderatePriorityLight,
	highPriorityDark,
	lowPriorityDark,
	moderatePriorityDark,
	highPriorityBlue,
	lowPriorityBlue,
	moderatePriorityBlue,
	highPriorityYellow,
	lowPriorityYellow,
	moderatePriorityYellow,
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

type Priority = "high" | "moderate" | "low"
type IconSide = "left" | "right"
type Size = "default" | "small"

const prioritiesLight: {
	[key in Priority]: any
} = {
	high: highPriorityLight,
	moderate: moderatePriorityLight,
	low: lowPriorityLight,
}
const prioritiesDark: {
	[key in Priority]: any
} = {
	high: highPriorityDark,
	moderate: moderatePriorityDark,
	low: lowPriorityDark,
}
const prioritiesBlue: {
	[key in Priority]: any
} = {
	high: highPriorityBlue,
	moderate: moderatePriorityBlue,
	low: lowPriorityBlue,
}
const prioritiesYellow: {
	[key in Priority]: any
} = {
	high: highPriorityYellow,
	moderate: moderatePriorityYellow,
	low: lowPriorityYellow,
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
	priority: "high",
	size: "default",
}

Button.defaultProps = { ...defaultProps }

export { Button }
