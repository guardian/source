import React from "react"
import { Container, Tiles } from "../../index"
import { textSans } from "@guardian/src-foundations/typography"
import { sport } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`

export const defaultLight = () => (
	<Container>
		<Tiles columns={4}>
			<div css={contents}>1</div>
			<div css={contents}>2</div>
			<div css={contents}>3</div>
			<div css={contents}>4</div>
			<div css={contents}>5</div>
			<div css={contents}>6</div>
			<div css={contents}>7</div>
			<div css={contents}>8</div>
		</Tiles>
	</Container>
)

defaultLight.story = {
	name: "default light",
}
