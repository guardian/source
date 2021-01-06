///<reference types="@emotion/react/types/css-prop" />
import React, { HTMLAttributes, ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"
import {
	footer,
	copyright,
	copyrightExtraPadding,
	links,
	backToTop,
	backToTopIcon,
	linksWrapper,
	linksWrapperSpace,
	linksWrapperSpaceWithBackToTop,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { SvgChevronUpSingle } from "@guardian/src-icons"
export { footerBrand } from "@guardian/src-foundations/themes"

interface FooterProps extends HTMLAttributes<HTMLElement>, Props {
	showBackToTop: boolean
	children?: ReactNode
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const backToTopLink = (
	<a href="#top" css={(theme) => backToTop(theme.footer && theme)}>
		Back to top
		<div css={(theme) => backToTopIcon(theme.footer && theme)}>
			<SvgChevronUpSingle />
		</div>
	</a>
)

const Footer = ({
	showBackToTop,
	children,
	cssOverrides,
	...props
}: FooterProps) => {
	return (
		<footer
			css={(theme) => [footer(theme.footer && theme), cssOverrides]}
			{...props}
		>
			<div
				css={[
					linksWrapper,
					showBackToTop
						? linksWrapperSpaceWithBackToTop
						: linksWrapperSpace,
				]}
			>
				<div css={(theme) => links(theme.footer && theme)}>
					{children}
				</div>
				{showBackToTop ? backToTopLink : ""}
			</div>
			<small
				css={[copyright, showBackToTop ? copyrightExtraPadding : ""]}
			>
				&copy; 2020 Guardian News and Media Limited or its affiliated
				companies. All rights reserved.
			</small>
		</footer>
	)
}

const defaultProps = { showBackToTop: false }

Footer.defaultProps = { ...defaultProps }

export { Footer }
