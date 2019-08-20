import { configure } from "@storybook/react";

function loadStories() {
	require("../packages/foundations/stories.jsx");
	require("../packages/button/stories.jsx");
	require("../packages/radio/stories.jsx");
}

configure(loadStories, module);
