import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { RadioGroup, Radio } from "./radio"

export default {
	title: "Radio",
}

export const simple = () => (
	<RadioGroup name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
)
simple.story = {
	name: "default",
}

export const dark = () => (
	<RadioGroup appearance="dark" name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
)
dark.story = {
	name: "dark",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark),
		],
	},
}

export const horizontal = () => (
	<RadioGroup orientation="horizontal" name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}
