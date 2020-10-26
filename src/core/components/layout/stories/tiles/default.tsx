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

export const noSpace = () => (
	<Tiles columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Tiles>
)

noSpace.story = {
	name: "no space",
}

export const space1 = () => (
	<Tiles space={2} columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Tiles>
)

space1.story = {
	name: "space 1",
}

export const space2 = () => (
	<Tiles space={2} columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Tiles>
)

space2.story = {
	name: "space 2",
}

export const space3 = () => (
	<Tiles space={2} columns={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Tiles>
)

space3.story = {
	name: "space 3",
}
