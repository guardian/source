import React from "react"
import { Container } from "../../index"
import { border } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

const style = css`
	border: 2px solid ${border.primary};
`

export const defaultLight = () => (
	<Container cssOverrides={style}>Hello world</Container>
)

defaultLight.story = {
	name: "default light",
}
