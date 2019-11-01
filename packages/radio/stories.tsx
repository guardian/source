import React from "react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { RadioGroup, Radio, lightTheme, blueTheme } from "./index"
import { Appearance } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" defaultChecked />,
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
		defaultChecked
	/>,
	<Radio
		value="annual"
		label="Annual"
		supporting="Subscribe for 12 months and save 10% £135 for 1 year then standard rate (£150 every year)"
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

const appearances: {
	name: Appearance
	theme: {}
}[] = [
	{
		name: "light",
		theme: lightTheme,
	},
	{ name: "blue", theme: blueTheme },
]

const [verticalLight, verticalBlue] = appearances.map(
	(appearance: { name: Appearance; theme: {} }) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="Radio"
				storyName="vertical"
				options={appearances.map(a => a.name)}
				selectedValue={appearance.name}
			>
				<ThemeProvider theme={appearance.theme}>
					<RadioGroup name="colours">
						{radios.map((radio, index) =>
							React.cloneElement(radio, { key: index }),
						)}
					</RadioGroup>
				</ThemeProvider>
			</WithBackgroundToggle>
		)
		story.story = {
			name: `vertical ${appearance.name}`,
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

const [supportingTextLight, supportingTextBlue] = appearances.map(
	(appearance: { name: Appearance; theme: {} }) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="Radio"
				storyName="supporting text"
				options={appearances.map(a => a.name)}
				selectedValue={appearance.name}
			>
				<ThemeProvider theme={appearance.theme}>
					<RadioGroup name="payment-options">
						{radiosWithSupportingText.map((radio, index) =>
							React.cloneElement(radio, { key: index }),
						)}
					</RadioGroup>
				</ThemeProvider>
			</WithBackgroundToggle>
		)
		story.story = {
			name: `supporting text ${appearance.name}`,
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

const horizontal = () => (
	<RadioGroup orientation="horizontal" name="yes-or-no">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}

const [errorWithMessageLight, errorWithMessageBlue] = appearances.map(
	(appearance: { name: Appearance; theme: {} }) => {
		const story = () => (
			<WithBackgroundToggle
				storyKind="Radio"
				storyName="error with message"
				options={appearances.map(a => a.name)}
				selectedValue={appearance.name}
			>
				<ThemeProvider theme={appearance.theme}>
					<RadioGroup name="colours" error="Please select a colour">
						{unselectedRadios.map((radio, index) =>
							React.cloneElement(radio, { key: index }),
						)}
					</RadioGroup>
				</ThemeProvider>
			</WithBackgroundToggle>
		)

		story.story = {
			name: `error with message ${appearance.name}`,
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

const errorWithoutMessage = () => (
	<RadioGroup name="colours" error={true}>
		{unselectedRadios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
)
errorWithoutMessage.story = {
	name: "error without message",
}

export {
	verticalLight,
	verticalBlue,
	horizontal,
	supportingTextLight,
	supportingTextBlue,
	errorWithMessageLight,
	errorWithMessageBlue,
	errorWithoutMessage,
}
