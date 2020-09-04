import React from "react"
import { Container, Columns, Column } from "../../index"
import { border } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

const container = css``

export const defaultLight = () => (
	<Container cssOverrides={container}>Hello world</Container>
)

defaultLight.story = {
	name: "default light",
}

export const withBorder = () => (
	<Container cssOverrides={container} border={true}>
		Hello world
	</Container>
)

withBorder.story = {
	name: "with border",
}

const column = css`
	border: 2px solid ${border.error};
	text-align: center;
`

export const withColumns = () => (
	<Container border={true} cssOverrides={container}>
		<Columns>
			<Column cssOverrides={column}>1</Column>
			<Column cssOverrides={column}>2</Column>
			<Column cssOverrides={column}>3</Column>
			<Column cssOverrides={column}>4</Column>
		</Columns>
	</Container>
)

withColumns.story = {
	name: "with columns",
}

export const withColumnsCollpaseBelowTablet = () => (
	<Container border={true} cssOverrides={container}>
		<Columns collapseBelow="tablet">
			<Column cssOverrides={column}>1</Column>
			<Column cssOverrides={column}>2</Column>
			<Column cssOverrides={column}>3</Column>
			<Column cssOverrides={column}>4</Column>
		</Columns>
	</Container>
)

withColumnsCollpaseBelowTablet.story = {
	name: "with columns collapse below tablet",
}
