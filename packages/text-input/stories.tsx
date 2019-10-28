import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { TextInput, lightTheme, darkTheme } from "./index"

export default {
	title: "TextInput",
}

export const defaultLight = () => (
	<WithBackgroundToggle
		storyKind="TextInput"
		storyName="default"
		selectedValue="light"
	>
		<ThemeProvider theme={lightTheme}>
			<TextInput label="First name" />
		</ThemeProvider>
	</WithBackgroundToggle>
)
defaultLight.story = {
	name: "default light",
}

export const defaultDark = () => (
	<WithBackgroundToggle
		storyKind="TextInput"
		storyName="default"
		selectedValue="dark"
	>
		<ThemeProvider theme={darkTheme}>
			<TextInput label="First name" />
		</ThemeProvider>
	</WithBackgroundToggle>
)
defaultDark.story = {
	name: "default dark",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark),
		],
	},
}
