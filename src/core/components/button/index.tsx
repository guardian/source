import React, {
	ReactElement,
	ReactNode,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from "react"
import { css } from "@emotion/core"
import { SerializedStyles } from "@emotion/css"
import { ButtonTheme } from "@guardian/src-foundations/themes"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { SvgArrowRightStraight } from "@guardian/src-icons"
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
	hideLabel: boolean
	children?: ReactNode
}

const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	hideLabel,
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
				/*
				TODO: We should be able to assume that children
				will always be passed to the Button component.
				A future breaking change might be to remove the
				logic that checks for the (non-)existence of children.
				*/
				iconSvg && (!hideLabel && children) ? iconSides[iconSide] : "",
				hideLabel || !children ? iconOnlySizes[size] : "",
				cssOverrides,
			]}
			{...props}
		>
			{hideLabel ? (
				<>
					<span
						css={css`
							${visuallyHidden};
						`}
					>
						{children}
					</span>
					{buttonContents[1]}
				</>
			) : (
				buttonContents
			)}
		</button>
	)
}

interface LinkButtonProps
	extends Props,
		AnchorHTMLAttributes<HTMLAnchorElement> {
	priority: Priority
	size: Size
	showIcon: boolean // TODO: deprecated, remove in future version
	iconSide: IconSide
	icon?: ReactElement
	hideLabel: boolean
	children?: ReactNode
}

const LinkButton = ({
	priority,
	size,
	showIcon,
	iconSide,
	icon: iconSvg,
	hideLabel,
	cssOverrides,
	children,
	...props
}: LinkButtonProps) => {
	const buttonContents = [children]

	if (iconSvg) {
		buttonContents.push(React.cloneElement(iconSvg, { key: "svg" }))
	}

	// TODO: deprecated API, remove in future version
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
					iconSvg ? iconSizes[size] : "",
					/*
					TODO: We should be able to assume that children
					will always be passed to the LinkButton component.
					A future breaking change might be to remove the
					logic that checks for the (non-)existence of children.
					*/
					iconSvg && (!hideLabel && children)
						? iconSides[iconSide]
						: "",
					hideLabel || !children ? iconOnlySizes[size] : "",
				]}
				{...props}
			>
				{hideLabel ? (
					<>
						<span
							css={css`
								${visuallyHidden};
							`}
						>
							{children}
						</span>
						{buttonContents[1]}
					</>
				) : (
					buttonContents
				)}
			</a>
		)
	}
}

const defaultButtonProps = {
	type: "button",
	priority: "primary",
	size: "default",
	iconSide: "left",
	hideLabel: false,
}

const defaultLinkButtonProps = {
	priority: "primary",
	size: "default",
	iconSide: "left",
	hideLabel: false,
	showIcon: false,
}

Button.defaultProps = { ...defaultButtonProps }
LinkButton.defaultProps = { ...defaultLinkButtonProps }

export { Button, LinkButton }
