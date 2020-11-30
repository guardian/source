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
			backgrounds: {
				default: name,
				values: [storybookBackgrounds[name]],
			},
		},
	}

	return story
})

const [successLight, successBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<InlineSuccess>Your voucher code is valid</InlineSuccess>
		</ThemeProvider>
	)

	story.story = {
		name: `inline success ${name}`,
		parameters: {
			backgrounds: {
				default: name,
				values: [storybookBackgrounds[name]],
			},
		},
	}

	return story
})

const errorLongLightMobile = () => (
	<InlineError>
		Please pick a date in the future, but not a leap year
	</InlineError>
)

errorLongLightMobile.story = {
	name: `long inline error light mobile`,
	parameters: {
		viewport: { defaultViewport: "mobileMedium" },
	},
}

export {
	errorLight,
	errorBlue,
	successLight,
	successBlue,
	errorLongLightMobile,
}
