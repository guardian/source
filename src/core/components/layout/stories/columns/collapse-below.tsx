import React from "react"
import { Container, Columns, Column } from "../../index"
import { sport } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`

export const collapseBelowTablet = () => (
	<Container border={true}>
		<Columns collapseBelow="tablet">
			<Column>
				<div css={contents}>1</div>
			</Column>
			<Column>
				<div css={contents}>2</div>
			</Column>
			<Column>
				<div css={contents}>3</div>
			</Column>
			<Column>
				<div css={contents}>4</div>
			</Column>
		</Columns>
	</Container>
)

collapseBelowTablet.story = {
	name: "collapse below tablet",
	parameters: {
		viewport: { defaultViewport: "phablet" },
	},
}
