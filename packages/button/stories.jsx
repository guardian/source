import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import { Button, appearances, iconSides } from "./button";

const stories = storiesOf("Button", module);

const appearanceKnobs = appearances.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);
const iconSideKnobs = iconSides.reduce(
	(acc, curr) => Object.assign({}, acc, { [curr]: curr }),
	{}
);

const getAppearance = () =>
	radios("Appearance", appearanceKnobs, appearances[0]);
const getIconSide = () => radios("Icon side", iconSideKnobs, iconSides[0]);

stories.addDecorator(withKnobs);
stories
	.add("with text", () => (
		<Button appearance={getAppearance()} iconSide={getIconSide()}>
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
