import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioGroup, Radio } from "./radio";

const stories = storiesOf("Radio", module);

stories.add("radio", () => (
	<RadioGroup name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
));
