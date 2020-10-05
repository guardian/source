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

interface SharedButtonProps extends Props {
	priority: Priority
	size: Size
	iconSide: IconSide
	icon?: ReactElement
	hideLabel: boolean
	nudgeIcon?: boolean
}

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

const buttonContents = ({
	hideLabel,
	iconSvg,
	children,
}: {
	hideLabel: boolean
	iconSvg?: ReactElement
	children: ReactNode
}) => {
	const contents = [children]

	if (iconSvg) {
		if (!hideLabel) {
			contents.push(<div key="space" className="src-button-space" />)
		}
		contents.push(React.cloneElement(iconSvg, { key: "svg" }))
	}
	if (hideLabel) {
		return (
			<>
				<span
					css={css`
						${visuallyHidden};
					`}
				>
					{children}
				</span>
				{contents[1]}
			</>
		)
	} else {
		return contents
	}
}

const buttonStyles = ({
	priority,
	size,
	icon: iconSvg,
	hideLabel,
	iconSide,
	nudgeIcon,
	cssOverrides,
}: SharedButtonProps) =>
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	(theme: any) => [
		button,
		sizes[size],
		priorities[priority](theme.button && theme),
		iconSvg ? iconSizes[size] : "",
		iconSvg && !hideLabel ? iconSides[iconSide] : "",
		nudgeIcon ? iconNudgeAnimation : "",
		hideLabel ? iconOnlySizes[size] : "",
		cssOverrides,
	]

interface ButtonProps
	extends SharedButtonProps,
		ButtonHTMLAttributes<HTMLButtonElement> {
	priority: Priority
	size: Size
	icon?: ReactElement
	iconSide: IconSide
	hideLabel: boolean
	nudgeIcon?: boolean
	children: ReactNode
	cssOverrides?: SerializedStyles | SerializedStyles[]
}
const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	hideLabel,
	nudgeIcon,
	cssOverrides,
	children,
	...props
}: ButtonProps) => (
	<button
		css={buttonStyles({
			size,
			priority,
			icon: iconSvg,
			hideLabel,
			iconSide,
			nudgeIcon,
			cssOverrides,
		})}
		{...props}
	>
		{buttonContents({
			hideLabel,
			iconSvg,
			children,
		})}
	</button>
)

interface LinkButtonProps
	extends SharedButtonProps,
		AnchorHTMLAttributes<HTMLAnchorElement> {
	priority: Priority
	size: Size
	iconSide: IconSide
	icon?: ReactElement
	nudgeIcon?: boolean
	hideLabel: boolean
	children: ReactNode
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const LinkButton = ({
	priority,
	size,
	iconSide,
	icon: iconSvg,
	nudgeIcon,
	hideLabel,
	cssOverrides,
	children,
	...props
}: LinkButtonProps) => (
	<a
		css={buttonStyles({
			size,
			priority,
			icon: iconSvg,
			hideLabel,
			iconSide,
			nudgeIcon,
			cssOverrides,
		})}
		{...props}
	>
		{buttonContents({
			hideLabel,
			iconSvg,
			children,
		})}
	</a>
)

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
