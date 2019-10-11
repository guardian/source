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
			<Radio value="blue" label="Blue" />
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

export const supportingTextLight = () => (
	<WithBackgroundToggle
		storyKind="Radio"
		storyName="supporting text"
		selectedValue="light"
	>
		<RadioGroup name="options">
			<Radio value="option-1" label="Option 1" supporting="Lorem ipsum" />
			<Radio value="option-2" label="Option 2" defaultChecked />
			<Radio value="option-3" label="Option 3" />
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
		<RadioGroup appearance="dark" name="options">
			<Radio value="option-1" label="Option 1" supporting="Lorem ipsum" />
			<Radio value="option-2" label="Option 2" defaultChecked />
			<Radio value="option-3" label="Option 3" />
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
		<RadioGroup appearance="blue" name="options">
			<Radio value="option-1" label="Option 1" supporting="Lorem ipsum" />
			<Radio value="option-2" label="Option 2" defaultChecked />
			<Radio value="option-3" label="Option 3" />
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
		<RadioGroup appearance="yellow" name="options">
			<Radio value="option-1" label="Option 1" supporting="Lorem ipsum" />
			<Radio value="option-2" label="Option 2" defaultChecked />
			<Radio value="option-3" label="Option 3" />
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
