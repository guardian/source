import React from "react"
import { ThemeProvider } from "emotion-theming"
import {
	Appearance,
	WithBackgroundToggle,
	storybookBackgrounds,
} from "@guardian/src-helpers"
import { InlineError } from "./index"
import { InlineErrorTheme, lightTheme, blueTheme } from "./themes"

export default {
	title: "InlineError",
}

const appearances: {
	name: Appearance
	theme: { inlineError: InlineErrorTheme }
}[] = [
	{
		name: "light",
		theme: lightTheme,
	},
	{ name: "blue", theme: blueTheme },
]

const [defaultLight, defaultBlue] = appearances.map(
	(appearance: {
		name: Appearance
		theme: { inlineError: InlineErrorTheme }
	}) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="InlineError"
				storyName="default"
				options={appearances.map(a => a.name)}
				selectedValue={appearance.name}
			>
				<ThemeProvider theme={appearance.theme}>
					<InlineError>Please enter your name</InlineError>
				</ThemeProvider>
			</WithBackgroundToggle>
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
