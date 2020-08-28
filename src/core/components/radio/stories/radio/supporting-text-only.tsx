import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioDefault, radioBrand } from "../../index"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"
import { RadioTheme, UserFeedbackTheme } from "@guardian/src-foundations/themes"

/* eslint-disable react/jsx-key */
const radiosWithSupportingTextOnly = [
	<Radio
		value="6-for-6"
		supporting="£6 for the first 6 issues (then £37.50 every quarter)"
	/>,
	<Radio
		value="quarterly"
		supporting="£37.50 every quarter"
		defaultChecked={true}
	/>,
	<Radio
		value="annual"
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
	theme: { radio: RadioTheme; userFeedback: UserFeedbackTheme }
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

const [supportingTextOnlyLight, supportingTextOnlyBlue] = themes.map(
	({ name, theme }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={narrow}>
					<RadioGroup name="payment-options">
						{radiosWithSupportingTextOnly.map((radio, index) =>
							React.cloneElement(radio, { key: index }),
						)}
					</RadioGroup>
				</div>
			</ThemeProvider>
		)
		story.story = {
			name: `supporting text only ${name}`,
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

export { supportingTextOnlyLight, supportingTextOnlyBlue }
