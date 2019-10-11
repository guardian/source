import React from "react"
import {
	storybookBackgrounds,
	WithBackgroundToggle,
} from "@guardian/src-helpers"
import { RadioGroup, Radio } from "./radio"

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
			<Radio value="red" label="Red" />
			<Radio value="green" label="Green" defaultChecked />
			<Radio value="blue" label="Blue" />
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
			<Radio value="red" label="Red" />
			<Radio value="green" label="Green" defaultChecked />
			<Radio value="blue" label="Blue" />
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
			<Radio value="red" label="Red" />
			<Radio value="green" label="Green" defaultChecked />
			<Radio value="blue" label="Blue" />
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
			<Radio value="red" label="Red" />
			<Radio value="green" label="Green" defaultChecked />
			<Radio value="yellow" label="yellow" />
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
	<RadioGroup orientation="horizontal" name="binary">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}
