import React from "react"
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

const singleStateLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<ChoiceCardGroup name="colours">
			{choiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
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
		<ChoiceCardGroup name="colours" multi={true}>
			{choiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
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
