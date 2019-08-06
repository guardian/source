import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import { Button, appearances } from "./button";

const stories = storiesOf("Button", module);

const appearanceKnobs = appearances.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);

const getAppearance = () => radios("Appearance", appearanceKnobs, "primary");

stories.addDecorator(withKnobs);
stories
	.add("with text", () => (
		<Button appearance={getAppearance()}>
			{text("Button Label", "Button Label")}
		</Button>
	))
	.add("with emoji", () => (
		<Button>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));
