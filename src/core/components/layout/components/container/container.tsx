import React from "react"
import { SerializedStyles } from "@emotion/core"
import { container, containerBorder } from "./styles"
import { Props } from "@guardian/src-helpers"

interface Container extends React.HTMLAttributes<HTMLDivElement>, Props {
	border?: boolean
	cssOverrides?: SerializedStyles | SerializedStyles[]
	children: React.ReactNode
}

const Container = ({
	border = false,
	cssOverrides,
	children,
	...props
}: Container) => {
	return (
		<div
			css={[container, border ? containerBorder : "", cssOverrides]}
			{...props}
		>
			{children}
		</div>
	)
}
const defaultProps = {}

Container.defaultProps = { ...defaultProps }

export { Container }
