import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"
import { space } from "@guardian/src-foundations"
import { TextInput, textInputLight } from "./index"

export default {
	title: "TextInput",
}

const themes: {
	name: ThemeName
	theme: {}
}[] = [
	{
		name: "default",
		theme: textInputLight,
	},
]

const constrainedWith = css`
	width: 30em;
`

const [defaultLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<TextInput label="First name" />
			</div>
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
})

const [optionalLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<TextInput label="First name" optional={true} />
			</div>
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
})
const [supportingTextLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<TextInput label="Email" supporting="alex@example.com" />
			</div>
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
})

const spacer = css`
	margin-bottom: ${space[3]}px;
`
const [widthsLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={spacer}>
				<TextInput label="First name" width={30} />
			</div>
			<div css={spacer}>
				<TextInput label="Postcode" width={10} />
			</div>
			<div css={spacer}>
				<TextInput label="Year of birth" width={4} />
			</div>
		</ThemeProvider>
	)

	story.story = {
		name: `widths ${name}`,
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
})

const [errorWithMessageLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<TextInput
					label="First name"
					error="Enter your first name below"
				/>
			</div>
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
})

const [constraintLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<TextInput
					label="Phone number"
					supporting="An invalid entry will show error styling"
					pattern="[0-9]{1,11}"
					title="11 digit phone number"
				/>
			</div>
		</ThemeProvider>
	)

	story.story = {
		name: `with constraint ${name}`,
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
})

export {
	defaultLight,
	optionalLight,
	supportingTextLight,
	widthsLight,
	errorWithMessageLight,
	constraintLight,
}
