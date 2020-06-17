import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	InlineErrorTheme,
	inlineErrorLight,
	inlineErrorBrand,
} from "@guardian/src-foundations/themes"
import { ThemeName, storybookBackgrounds } from "@guardian/src-helpers"
import { InlineError } from "./index"

export default {
	title: "InlineError",
}

const themes: {
	name: ThemeName
	theme: { inlineError: InlineErrorTheme }
}[] = [
	{
		name: "default",
		theme: inlineErrorLight,
	},
	{ name: "brand", theme: inlineErrorBrand },
]

const [defaultLight, defaultBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<InlineError>Please enter your name</InlineError>
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
export { defaultLight, defaultBlue, errorLongLightMobile }
