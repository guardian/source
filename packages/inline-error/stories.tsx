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
		name: "light",
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

export { defaultLight, defaultBlue }
