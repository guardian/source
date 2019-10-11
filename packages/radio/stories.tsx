import React from "react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { RadioGroup, Radio } from "./radio"

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
/* eslint-enable react/jsx-key */

export default {
	title: "Radio",
}

export const verticalLight = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="vertical"
		selectedValue="light"
	>
		<RadioGroup name="colours">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
verticalLight.story = {
	name: "vertical light",
}

export const verticalDark = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="vertical"
		selectedValue="dark"
	>
		<RadioGroup appearance="dark" name="colours">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
verticalDark.story = {
	name: "vertical dark",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark),
		],
	},
}
export const verticalBlue = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="vertical"
		selectedValue="blue"
	>
		<RadioGroup appearance="blue" name="colours">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
verticalBlue.story = {
	name: "vertical blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.blue),
		],
	},
}

export const verticalYellow = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="vertical"
		selectedValue="yellow"
	>
		<RadioGroup appearance="yellow" name="colours">
			{radios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
verticalYellow.story = {
	name: "vertical yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.yellow),
		],
	},
}

export const horizontal = () => (
	<RadioGroup orientation="horizontal" name="yes-or-no">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}

export const supportingTextLight = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="supporting text"
		selectedValue="light"
	>
		<RadioGroup name="payment-options">
			{radiosWithSupportingText.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
supportingTextLight.story = {
	name: "supporting text light",
}

export const supportingTextDark = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="supporting text"
		selectedValue="dark"
	>
		<RadioGroup appearance="dark" name="payment-options">
			{radiosWithSupportingText.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
supportingTextDark.story = {
	name: "supporting text dark",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark),
		],
	},
}

export const supportingTextBlue = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="supporting text"
		selectedValue="blue"
	>
		<RadioGroup appearance="blue" name="payment-options">
			{radiosWithSupportingText.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
supportingTextBlue.story = {
	name: "supporting text blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.blue),
		],
	},
}

export const supportingTextYellow = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="supporting text"
		selectedValue="yellow"
	>
		<RadioGroup appearance="yellow" name="payment-options">
			{radiosWithSupportingText.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</WithBackgroundToggle>
)
supportingTextYellow.story = {
	name: "supporting text yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.yellow),
		],
	},
}
