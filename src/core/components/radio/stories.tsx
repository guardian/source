import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio, radioLight, radioBrand } from "./index"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" checked={true} />,
	<Radio value="blue" label="Blue" />,
]
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
const unselectedRadios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

export default {
	title: "Radio",
}

const themes: {
	name: ThemeName
	theme: {}
}[] = [
	{
		name: "light",
		theme: radioLight,
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

const horizontal = () => (
	<RadioGroup orientation="horizontal" name="yes-or-no">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" checked={true} />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}

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

export {
	verticalLight,
	verticalBlue,
	horizontal,
	supportingTextLight,
	supportingTextBlue,
	errorLight,
	errorBlue,
}
