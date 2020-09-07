import React from "react"
import { Container, Stack } from "../../index"
import { textSans } from "@guardian/src-foundations/typography"
import { sport } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`

export const noSpace = () => (
	<Container>
		<Stack>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

noSpace.story = {
	name: "no space",
}

export const space1 = () => (
	<Container>
		<Stack space={1}>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

space1.story = {
	name: "space 1",
}

export const space2 = () => (
	<Container>
		<Stack space={2}>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

space2.story = {
	name: "space 2",
}

export const space3 = () => (
	<Container>
		<Stack space={3}>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

space3.story = {
	name: "space 3",
}

export const space4 = () => (
	<Container>
		<Stack space={4}>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

space4.story = {
	name: "space 4",
}

export const space5 = () => (
	<Container>
		<Stack space={5}>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
			<div css={contents}>Hello</div>
		</Stack>
	</Container>
)

space5.story = {
	name: "space 5",
}
