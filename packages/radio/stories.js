import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, radios } from "@storybook/addon-knobs";
import { RadioGroup, Radio, appearances } from "./radio";

const stories = storiesOf("Radio", module);

const appearanceKnobs = appearances.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);

const getAppearance = () =>
	radios("Appearance", appearanceKnobs, appearances[0]);

stories.addDecorator(withKnobs);
stories.add("radio", () => (
	<RadioGroup appearance={getAppearance()} name="colours">
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
));
