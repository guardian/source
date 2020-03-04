import React, { ReactElement, ReactNode, AnchorHTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/css"
import { LinkTheme } from "@guardian/src-foundations/themes"
import {
	link,
	primary,
	secondary,
	subdued,
	icon,
	iconRight,
	iconLeft,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export {
	linkLight,
	linkBrand,
	linkBrandYellow,
} from "@guardian/src-foundations/themes"

export type Priority = "primary" | "secondary"

type IconSide = "left" | "right"

const priorities: {
	[key in Priority]: ({ link }: { link: LinkTheme }) => SerializedStyles
} = {
	primary,
	secondary,
}

const iconSides: {
	[key in IconSide]: SerializedStyles
} = {
	right: iconRight,
	left: iconLeft,
}
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, Props {
	priority: Priority
	subdued: boolean
	icon?: ReactElement
	iconSide: IconSide
	children?: ReactNode
}

const Link = ({
	priority,
	subdued: isSubdued,
	icon: iconSvg,
	iconSide,
	cssOverrides,
	children,
	...props
}: LinkProps) => {
	const linkContents = [children]
	// a bit of underlined space; the icon sits on top
	const spacer = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>

	if (iconSvg) {
		if (iconSide === "left") {
			linkContents.unshift(
				React.cloneElement(iconSvg, { key: "svg" }),
				spacer,
			)
		} else {
			linkContents.push(
				React.cloneElement(iconSvg, { key: "svg" }),
				spacer,
			)
		}
	}
	return (
		<a
			css={theme => [
				link,
				priorities[priority](theme.link && theme),
				isSubdued ? subdued : "",
				iconSvg ? icon : "",
				iconSvg ? iconSides[iconSide] : "",
				cssOverrides,
			]}
			{...props}
		>
			{linkContents}
		</a>
	)
}

const defaultLinkProps = {
	priority: "primary",
	subdued: false,
	iconSide: "left",
}

Link.defaultProps = { ...defaultLinkProps }

export { Link }
