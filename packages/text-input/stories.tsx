import React from "react"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds, Appearance } from "@guardian/src-helpers"
import { TextInput, TextInputTheme, lightTheme } from "./index"

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
]

const [defaultLight] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<TextInput label="First name" />
			</ThemeProvider>
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

const [errorWithMessageLight] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<TextInput
					label="First name"
					error="Enter your first name below"
				/>
			</ThemeProvider>
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

const [errorWithoutMessageLight] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<TextInput label="First name" error={true} />
			</ThemeProvider>
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

const [optionalLight] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<TextInput label="First name" optional={true} />
			</ThemeProvider>
		)

		story.story = {
			name: `optional ${name}`,
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
const [supportingTextLight] = appearances.map(
	({
		name,
		theme,
	}: {
		name: Appearance
		theme: { textInput: TextInputTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<TextInput label="Email" supporting="alex@example.com" />
			</ThemeProvider>
		)

		story.story = {
			name: `supporting text ${name}`,
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
	optionalLight,
	supportingTextLight,
	errorWithMessageLight,
	errorWithoutMessageLight,
}
