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
import { SerializedStyles } from "@emotion/css"
import { ButtonTheme } from "@guardian/src-foundations/themes"
export {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonReaderRevenue,
	buttonReaderRevenueYellow,
} from "@guardian/src-foundations/themes"

export type Priority = "primary" | "secondary" | "tertiary"
type IconSide = "left" | "right"
type Size = "default" | "small"

const priorities: {
	[key in Priority]: ({ button }: { button: ButtonTheme }) => SerializedStyles
} = {
	primary,
	secondary,
	tertiary,
}

const iconSides: {
	[key in IconSide]: SerializedStyles
} = {
	right: iconLeft,
	left: iconRight,
}
const sizes: {
	[key in Size]: SerializedStyles
} = {
	default: defaultSize,
	small: smallSize,
}
const iconSizes: {
	[key in Size]: SerializedStyles
} = {
	default: iconDefault,
	small: iconSmall,
}
const iconOnlySizes: {
	[key in Size]: SerializedStyles
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
	iconSide: IconSide
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
				priorities[priority](theme.button && theme),
				iconSvg ? iconSizes[size] : "",
				iconSvg && children ? iconSides[iconSide] : "",
				!children ? iconOnlySizes[size] : "",
			]}
			{...props}
		>
			{buttonContents}
		</button>
	)
}

const LinkButton = ({
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
	iconSide: IconSide
	href: string
	children?: ReactNode
}) => {
	const buttonContents = [children]

	if (iconSvg) {
		buttonContents.push(React.cloneElement(iconSvg, { key: "svg" }))
	}

	return (
		<a
			css={theme => [
				button,
				sizes[size],
				priorities[priority](theme.button && theme),
				iconSvg ? iconSizes[size] : "",
				iconSvg && children ? iconSides[iconSide] : "",
				!children ? iconOnlySizes[size] : "",
			]}
			{...props}
		>
			{buttonContents}
		</a>
	)
}

const defaultButtonProps = {
	type: "button",
	priority: "primary",
	size: "default",
	iconSide: "left",
}

const defaultLinkButtonProps = {
	priority: "primary",
	size: "default",
	iconSide: "right",
}

Button.defaultProps = { ...defaultButtonProps }
LinkButton.defaultProps = { ...defaultLinkButtonProps }

export { Button, LinkButton }
