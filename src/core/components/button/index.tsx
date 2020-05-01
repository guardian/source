import React, {
	ReactElement,
	ReactNode,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from "react"
import { SerializedStyles } from "@emotion/css"
import { ButtonTheme } from "@guardian/src-foundations/themes"
import { SvgArrowRightStraight } from "@guardian/src-svgs"
import {
	button,
	primary,
	secondary,
	tertiary,
	subdued,
	defaultSize,
	smallSize,
	xsmallSize,
	iconDefault,
	iconSmall,
	iconXsmall,
	iconLeft,
	iconRight,
	iconOnlyDefault,
	iconOnlySmall,
	iconOnlyXsmall,
	iconNudgeAnimation,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export {
	buttonDefault,
	buttonBrand,
	buttonBrandAlt,
} from "@guardian/src-foundations/themes"
export {
	buttonReaderRevenue,
	buttonReaderRevenueBrand,
	buttonReaderRevenueBrandAlt,
} from "./themes"

export type Priority = "primary" | "secondary" | "tertiary" | "subdued"
type IconSide = "left" | "right"
type Size = "default" | "small" | "xsmall"
type LinkButtonPriority = Extract<
	"primary" | "secondary" | "tertiary",
	Priority
>

const priorities: {
	[key in Priority]: ({ button }: { button: ButtonTheme }) => SerializedStyles
} = {
	primary,
	secondary,
	tertiary,
	subdued,
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
	xsmall: xsmallSize,
}
const iconSizes: {
	[key in Size]: SerializedStyles
} = {
	default: iconDefault,
	small: iconSmall,
	xsmall: iconXsmall,
}
const iconOnlySizes: {
	[key in Size]: SerializedStyles
} = {
	default: iconOnlyDefault,
	small: iconOnlySmall,
	xsmall: iconOnlyXsmall,
}

interface ButtonProps extends Props, ButtonHTMLAttributes<HTMLButtonElement> {
	priority: Priority
	size: Size
	iconSide: IconSide
	icon?: ReactElement
	children?: ReactNode
}

const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	cssOverrides,
	children,
	...props
}: ButtonProps) => {
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
				cssOverrides,
			]}
			{...props}
		>
			{buttonContents}
		</button>
	)
}

interface LinkButtonProps
	extends Props,
		AnchorHTMLAttributes<HTMLAnchorElement> {
	priority: LinkButtonPriority
	size: Size
	showIcon: boolean
	children?: ReactNode
}

const LinkButton = ({
	priority,
	size,
	showIcon,
	cssOverrides,
	children,
	...props
}: LinkButtonProps) => {
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
					cssOverrides,
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
