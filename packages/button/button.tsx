import React, { ReactElement, ReactNode } from "react"
import {
	button,
	primary,
	secondary,
	tertiary,
	defaultSize,
	smallSize,
	iconDefault,
	iconSmall,
	iconLeft,
	iconRight,
	iconOnlyDefault,
	iconOnlySmall,
} from "./styles"
export * from "./themes"

type Priority = "primary" | "secondary" | "tertiary"
type IconSide = "left" | "right"
type Size = "default" | "small"

const priorities: {
	[key in Priority]: any
} = {
	primary,
	secondary,
	tertiary,
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
			css={theme => [
				button,
				sizes[size],
				priorities[priority](theme),
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
	priority: "primary",
	size: "default",
}

Button.defaultProps = { ...defaultProps }

export { Button }
