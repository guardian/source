import React from "react";
import { storiesOf } from "@storybook/react";
import { storybookBackgrounds } from "@guardian/src-helpers";
import { RadioGroup, Radio } from "./radio";

const stories = storiesOf("Radio", module);

stories.add("default", () => (
	<RadioGroup name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
));
stories.add(
	"dark",
	() => (
		<RadioGroup appearance="dark" name="colours">
			<Radio value="red" label="Red" />
			<Radio value="green" label="Green" defaultChecked />
			<Radio value="blue" label="Blue" />
		</RadioGroup>
	),
	{
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.dark)
		]
	}
);
stories.add("orientation horizontal", () => (
	<RadioGroup orientation="horizontal" name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
));
