import React, { HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { footer, copyright } from "./styles"
import { Props } from "@guardian/src-helpers"
export { footerBrand } from "@guardian/src-foundations/themes"

interface FooterProps extends HTMLAttributes<HTMLElement>, Props {
	cssOverrides?: SerializedStyles | SerializedStyles[]
}

const Footer = ({ cssOverrides, ...props }: FooterProps) => {
	return (
		<footer
			css={(theme) => [footer(theme.footer && theme), cssOverrides]}
			{...props}
		>
			<small css={copyright}>
				&copy; 2020 Guardian News and Media Limited or its affiliated
				companies. All rights reserved.
			</small>
		</footer>
	)
}

const defaultProps = {}

Footer.defaultProps = { ...defaultProps }

export { Footer }
