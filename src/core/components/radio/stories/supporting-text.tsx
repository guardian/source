import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioDefault, radioBrand } from "../index"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"
import { RadioTheme, InlineErrorTheme } from "@guardian/src-foundations/themes"

/* eslint-disable react/jsx-key */
const radiosWithSupportingText = [
	<Radio
		value="6-for-6"
		label="6 for 6"
		supporting="£6 for the first 6 issues (then £37.50 every quarter)"
	/>,
	<Radio
		value="quarterly"
		label="Quarterly"
		supporting="£37.50 every quarter"
		checked={true}
	/>,
	<Radio
		value="annual"
		label="Annual"
		supporting={
			<>
				Subscribe for <strong>12 months</strong> and save 10% £135 for 1
				year then standard rate (£150 every year)
			</>
		}
	/>,
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

const narrow = css`
	width: 30rem;
`

const [supportingTextLight, supportingTextBlue] = themes.map(
	({ name, theme }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={narrow}>
					<RadioGroup name="payment-options">
						{radiosWithSupportingText.map((radio, index) =>
							React.cloneElement(radio, { key: index }),
						)}
					</RadioGroup>
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
	},
)

export { supportingTextLight, supportingTextBlue }
