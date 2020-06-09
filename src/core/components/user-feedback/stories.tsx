import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	UserFeedbackTheme,
	userFeedbackDefault,
	userFeedbackBrand,
} from "@guardian/src-foundations/themes"
import { ThemeName, storybookBackgrounds } from "@guardian/src-helpers"
import { InlineError, InlineSuccess } from "./index"

export default {
	title: "UserFeedback",
}

const themes: {
	name: ThemeName
	theme: { userFeedback: UserFeedbackTheme }
}[] = [
	{
		name: "default",
		theme: userFeedbackDefault,
	},
	{ name: "brand", theme: userFeedbackBrand },
]

const [errorLight, errorBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<InlineError>Please enter your name</InlineError>
		</ThemeProvider>
	)

	story.story = {
		name: `inline error ${name}`,
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

const [successLight] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<InlineSuccess>Your voucher code is valid</InlineSuccess>
		</ThemeProvider>
	)

	story.story = {
		name: `inline success ${name}`,
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

export { errorLight, errorBlue, successLight }
