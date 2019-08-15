import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, radios } from "@storybook/addon-knobs";
import { RadioGroup, Radio, appearances, orientations } from "./radio";

const stories = storiesOf("Radio", module);

const appearanceKnobs = appearances.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);
const orientationKnobs = orientations.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);

const getAppearance = () =>
	radios("Appearance", appearanceKnobs, appearances[0]);
const getOrientation = () =>
	radios("Orientation", orientationKnobs, orientations[0]);

stories.addDecorator(withKnobs);
stories.add("radio", () => (
	<RadioGroup
		appearance={getAppearance()}
		orientation={getOrientation()}
		name="colours"
	>
		<Radio value="red" label="Red" />
		<Radio value="green" label="Green" defaultChecked />
		<Radio value="blue" label="Blue" />
	</RadioGroup>
));
