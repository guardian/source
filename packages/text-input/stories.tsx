import React from "react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { TextInput } from "./index"

export default {
	title: "TextInput",
}

export const defaultLight = () => (
	<WithBackgroundToggle
		storyKind="TextInput"
		storyName="default"
		selectedValue="light"
	>
		<TextInput label="First name" />
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
		<TextInput label="First name" appearance="dark" />
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
