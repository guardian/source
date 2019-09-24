import React, { ReactElement, ReactNode } from "react"
import {
	button,
	highPriority,
	lowPriority,
	moderatePriority,
	defaultSize,
	smallSize,
	icon,
	iconLeft,
	iconRight,
	iconOnlyDefault,
	iconOnlySmall,
} from "./styles"

type Priority = "high" | "moderate" | "low"
type IconSide = "left" | "right"
type Size = "default" | "small"

const priorities: {
	[key in Priority]: any
} = {
	high: highPriority,
	moderate: moderatePriority,
	low: lowPriority,
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
const iconOnlySizes: {
	[key in Size]: any
} = {
	default: iconOnlyDefault,
	small: iconOnlySmall,
}
const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	children,
	...props
}: {
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
				priorities[priority],
				iconSvg ? icon : "",
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
	disabled: false,
	priority: "high",
	size: "default",
}

Button.defaultProps = { ...defaultProps }

export { Button }
