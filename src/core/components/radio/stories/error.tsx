import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioDefault, radioBrand } from "../index"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"
import { RadioTheme, UserFeedbackTheme } from "@guardian/src-foundations/themes"

/* eslint-disable react/jsx-key */
const unselectedRadios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

const themes: {
	name: ThemeName
	theme: { radio: RadioTheme; userFeedback: UserFeedbackTheme }
}[] = [
	{
		name: "default",
		theme: radioDefault,
	},
	{ name: "brand", theme: radioBrand },
]

const [errorLight, errorBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<RadioGroup name="colours" error="Please select a colour">
				{unselectedRadios.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</ThemeProvider>
	)

	story.story = {
		name: `error ${name}`,
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

export { errorLight, errorBlue }
