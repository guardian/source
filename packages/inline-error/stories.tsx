import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	InlineErrorTheme,
	inlineErrorLight,
	inlineErrorBrand,
} from "@guardian/src-foundations/themes"
import { Appearance, storybookBackgrounds } from "@guardian/src-helpers"
import { InlineError } from "./index"

export default {
	title: "InlineError",
}

const appearances: {
	name: Appearance
	theme: { inlineError: InlineErrorTheme }
}[] = [
	{
		name: "light",
		theme: inlineErrorLight,
	},
	{ name: "blue", theme: inlineErrorBrand },
]

const [defaultLight, defaultBlue] = appearances.map(
	(appearance: {
		name: Appearance
		theme: { inlineError: InlineErrorTheme }
	}) => {
		const story = () => (
			<ThemeProvider theme={appearance.theme}>
				<InlineError>Please enter your name</InlineError>
			</ThemeProvider>
		)

		story.story = {
			name: `default ${appearance.name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[appearance.name],
					),
				],
			},
		}

		return story
	},
)

export { defaultLight, defaultBlue }
