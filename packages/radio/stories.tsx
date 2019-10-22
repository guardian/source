import React from "react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { RadioGroup, Radio } from "./radio"
import { Appearance } from "@guardian/src-helpers"

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

const appearances: Appearance[] = ["light", "dark", "blue", "yellow"]

const [
	verticalLight,
	verticalDark,
	verticalBlue,
	verticalYellow,
] = appearances.map((appearance: Appearance) => {
	const story = () => (
		<WithBackgroundToggle
			storyKind="Radio"
			storyName="vertical"
			selectedValue={appearance}
		>
			<RadioGroup appearance={appearance} name="colours">
				{radios.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</WithBackgroundToggle>
	)
	story.story = {
		name: `vertical ${appearance}`,
		parameters: {
			backgrounds: [
				Object.assign(
					{},
					{ default: true },
					storybookBackgrounds[appearance],
				),
			],
		},
	}

	return story
})

const [
	supportingTextLight,
	supportingTextDark,
	supportingTextBlue,
	supportingTextYellow,
] = appearances.map((appearance: Appearance) => {
	const story = () => (
		<WithBackgroundToggle
			storyKind="Radio"
			storyName="supporting text"
			selectedValue={appearance}
		>
			<RadioGroup appearance={appearance} name="payment-options">
				{radiosWithSupportingText.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</WithBackgroundToggle>
	)
	story.story = {
		name: `supporting text ${appearance}`,
		parameters: {
			backgrounds: [
				Object.assign(
					{},
					{ default: true },
					storybookBackgrounds[appearance],
				),
			],
		},
	}

	return story
})

const horizontal = () => (
	<RadioGroup orientation="horizontal" name="yes-or-no">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}

const errorWithMessage = () => (
	<RadioGroup name="colours" error="Please select a colour">
		{unselectedRadios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
)
errorWithMessage.story = {
	name: "error with message",
}

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
	verticalDark,
	verticalBlue,
	verticalYellow,
	horizontal,
	supportingTextLight,
	supportingTextDark,
	supportingTextBlue,
	supportingTextYellow,
	errorWithMessage,
	errorWithoutMessage,
}
