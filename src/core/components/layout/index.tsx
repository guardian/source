import React, { HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/core"
import { container } from "./styles"
import { Props } from "@guardian/src-helpers"

interface LayoutProps extends HTMLAttributes<HTMLDivElement>, Props {
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: string
}

const Container = ({ cssOverrides, children, ...props }: LayoutProps) => {
	return (
		<div css={[container, cssOverrides]} {...props}>
			{children}
		</div>
	)
}

const defaultProps = {}

Container.defaultProps = { ...defaultProps }

export { Container }
