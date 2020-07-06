import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds, ThemeName } from "@guardian/src-helpers"
import { from } from "@guardian/src-foundations/mq"
import { Select, Option, selectDefault } from "./index"
import {
	SelectTheme,
	UserFeedbackTheme,
} from "@guardian/src-foundations/themes"

export default {
	title: "Select",
}

const themes: {
	name: ThemeName
	theme: { select: SelectTheme; userFeedback: UserFeedbackTheme }
}[] = [
	{
		name: "default",
		theme: selectDefault,
	},
]

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 20em;
	}
`

const [defaultLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<Select label="State">
					<Option value="">Select a state</Option>
					<Option value="al">Alabama</Option>
					<Option value="ca">California</Option>
				</Select>
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
				<Select label="State" optional={true}>
					<Option value="">Select a state</Option>
					<Option value="al">Alabama</Option>
					<Option value="ca">California</Option>
				</Select>
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
				<Select
					label="State"
					supporting="Leave blank if you are not within the US"
				>
					<Option value="">Select a state</Option>
					<Option value="al">Alabama</Option>
					<Option value="ca">California</Option>
				</Select>
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

const [errorWithMessageLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<Select
					label="State"
					error="Please select your home state. This service is unavailable outside of the US."
				>
					<Option value="">Select a state</Option>
					<Option value="al">Alabama</Option>
					<Option value="ca">California</Option>
				</Select>
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

const [successWithMessageLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<div css={constrainedWith}>
				<Select
					label="State"
					success="This service is available in your state"
				>
					<Option value="">Select a state</Option>
					<Option value="al" selected={true}>
						Alabama
					</Option>
					<Option value="ca">California</Option>
				</Select>
			</div>
		</ThemeProvider>
	)

	story.story = {
		name: `success with message ${name}`,
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
	errorWithMessageLight,
	successWithMessageLight,
}
