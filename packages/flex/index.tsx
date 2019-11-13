import React from "react"
import { spaceBetween } from "./styles"
export * from "./themes"

const Flex = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={spaceBetween}>{children}</div>
)

export { Flex }
