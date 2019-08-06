import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioGroup, Radio } from "./radio";

const stories = storiesOf("Radio", module);

stories.add("radio", () => (
	<RadioGroup name="colours">
		<Radio id="orange" label="Red" />
		<Radio id="violet" label="Green" defaultChecked />
		<Radio id="yellow" label="Blue" />
	</RadioGroup>
));
