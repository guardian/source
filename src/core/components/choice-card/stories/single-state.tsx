import React from "react"
import { css } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index"

const medium = css`
	width: 30em;
`

/* eslint-disable react/jsx-key */
const choiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard
		value="green"
		label="Green"
		id="default-green"
		defaultChecked={true}
	/>,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
]
/* eslint-enable react/jsx-key */

export const singleStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={medium}>
			<ChoiceCardGroup name="colours">
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

singleStateLight.story = {
	name: `single state light`,
}
