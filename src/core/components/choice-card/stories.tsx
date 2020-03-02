import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const choiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard
		value="green"
		label="Green"
		id="default-green"
		checked={true}
	/>,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
]
/* eslint-enable react/jsx-key */

export default {
	title: "ChoiceCard",
}

const narrow = css`
	width: 20em;
`

const singleStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
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
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

const multiStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={narrow}>
			<ChoiceCardGroup name="colours" multi={true}>
				{choiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

multiStateLight.story = {
	name: `multi state light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

// const errorLight = () => (
// 	<ThemeProvider theme={choiceCardDefault}>
// 		<ChoiceCardGroup name="colours" error="Please select a colour">
// 			{unselectedChoiceCards.map((radio, index) =>
// 				React.cloneElement(radio, { key: index }),
// 			)}
// 		</ChoiceCardGroup>
// 	</ThemeProvider>
// )

// errorLight.story = {
// 	name: `error light`,
// 	parameters: {
// 		backgrounds: [
// 			Object.assign({}, { default: true }, storybookBackgrounds.default),
// 		],
// 	},
// }

export { singleStateLight, multiStateLight }
