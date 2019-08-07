import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioGroup, Radio } from "./radio";

const stories = storiesOf("Radio", module);

stories.add("radio", () => (
	<RadioGroup name="colours">
		<Radio value="orange" label="Red" />
		<Radio value="violet" label="Green" defaultChecked />
		<Radio value="yellow" label="Blue" />
	</RadioGroup>
));
