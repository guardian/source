import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioDefault, radioBrand } from "../index"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"
import { RadioTheme, InlineErrorTheme } from "@guardian/src-foundations/themes"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" checked={true} />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

const themes: {
	name: ThemeName
	theme: { radio: RadioTheme; inlineError: InlineErrorTheme }
}[] = [
	{
		name: "default",
		theme: radioDefault,
	},
	{ name: "brand", theme: radioBrand },
]

const [verticalLight, verticalBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<RadioGroup name="colours">
				{radios.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</ThemeProvider>
	)
	story.story = {
		name: `vertical ${name}`,
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

export { verticalLight, verticalBlue }
