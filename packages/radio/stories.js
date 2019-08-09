import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioGroup, Radio } from "./radio";

const stories = storiesOf("Radio", module);

stories.add("radio", () => (
	<RadioGroup name="colours">
		<Radio id="radio-red" value="red" label="Red" />
		<Radio id="radio-green" value="green" label="Green" defaultChecked />
		<Radio id="radio-blue" value="blue" label="Blue" />
	</RadioGroup>
));
