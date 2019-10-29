import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
	Appearance,
} from "@guardian/src-helpers"
import { TextInput, TextInputTheme, lightTheme, darkTheme } from "./index"

export default {
	title: "TextInput",
}

const appearances: {
	name: Appearance
	theme: { textInput: TextInputTheme }
}[] = [
	{
		name: "light",
		theme: lightTheme,
	},
	{
		name: "dark",
		theme: darkTheme,
	},
]

const [defaultLight, defaultDark] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="TextInput"
				storyName="default"
				options={appearances.map(a => a.name)}
				selectedValue={name}
			>
				<ThemeProvider theme={theme}>
					<TextInput label="First name" />
				</ThemeProvider>
			</WithBackgroundToggle>
		)

		story.story = {
			name: `default ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

const [errorWithMessageLight, errorWithMessageDark] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="TextInput"
				storyName="error with message"
				options={appearances.map(a => a.name)}
				selectedValue={name}
			>
				<ThemeProvider theme={theme}>
					<TextInput
						label="First name"
						error="Enter your first name below"
					/>
				</ThemeProvider>
			</WithBackgroundToggle>
		)

		story.story = {
			name: `error with message ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

const [errorWithoutMessageLight, errorWithoutMessageDark] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="TextInput"
				storyName="error without message"
				options={appearances.map(a => a.name)}
				selectedValue={name}
			>
				<ThemeProvider theme={theme}>
					<TextInput label="First name" error={true} />
				</ThemeProvider>
			</WithBackgroundToggle>
		)

		story.story = {
			name: `error without message ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

export {
	defaultLight,
	defaultDark,
	errorWithMessageLight,
	errorWithMessageDark,
	errorWithoutMessageLight,
	errorWithoutMessageDark,
}
