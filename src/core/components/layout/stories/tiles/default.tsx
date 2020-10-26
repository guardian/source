import React from "react"
import { css } from "@emotion/core"
import { Tiles } from "../../index"
import { textSans } from "@guardian/src-foundations/typography"
import { sport } from "@guardian/src-foundations/palette"

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`

export const columns2 = () => (
	<Tiles columns={2}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
	</Tiles>
)

columns2.story = {
	name: "2 columns",
}

export const columns3 = () => (
	<Tiles columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Tiles>
)

columns3.story = {
	name: "3 columns",
}

export const columns4 = () => (
	<Tiles columns={4}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
		<div css={contents}>Item 4</div>
	</Tiles>
)

columns4.story = {
	name: "4 columns",
}

export const columns5 = () => (
	<Tiles columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
		<div css={contents}>Item 4</div>
		<div css={contents}>Item 5</div>
	</Tiles>
)

columns5.story = {
	name: "5 columns",
}
