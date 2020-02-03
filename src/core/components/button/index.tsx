import React, { ReactElement, ReactNode, MouseEvent } from "react"
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
	iconNudgeAnimation,
} from "./styles"
import { SerializedStyles } from "@emotion/css"
import { ButtonTheme } from "@guardian/src-foundations/themes"
import { SvgArrowRightStraight } from "@guardian/src-svgs"
export {
	buttonDefault,
	buttonBrand,
	buttonBrandAlt,
} from "@guardian/src-foundations/themes"
export { buttonReaderRevenue, buttonReaderRevenueAlt } from "./themes"

export type Priority = "primary" | "secondary" | "tertiary"
type IconSide = "left" | "right"
type Size = "default" | "small"
type LinkButtonPriority = Extract<"primary" | "secondary", Priority>

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
	right: iconRight,
	left: iconLeft,
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
	iconSide: IconSide
	icon?: ReactElement
	tabIndex?: number
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void
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
	showIcon,
	children,
	...props
}: {
	priority: LinkButtonPriority
	size: Size
	showIcon: boolean
	href: string
	children?: ReactNode
}) => {
	if (showIcon) {
		return (
			<a
				css={theme => [
					button,
					sizes[size],
					priorities[priority](theme.button && theme),
					iconSizes[size],
					children ? iconSides.right : "",
					!children ? iconOnlySizes[size] : "",
					iconNudgeAnimation,
				]}
				{...props}
			>
				{children}
				<SvgArrowRightStraight />
			</a>
		)
	} else {
		return (
			<a
				css={theme => [
					button,
					sizes[size],
					priorities[priority](theme.button && theme),
				]}
				{...props}
			>
				{children}
			</a>
		)
	}
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
	showIcon: false,
}

Button.defaultProps = { ...defaultButtonProps }
LinkButton.defaultProps = { ...defaultLinkButtonProps }

export { Button, LinkButton }
