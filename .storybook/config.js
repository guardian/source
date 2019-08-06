import { configure } from "@storybook/react";

function loadStories() {
	require("../packages/button/stories.js");
	require("../packages/dropdown/stories.js");
	require("../packages/radio/stories.js");
}

configure(loadStories, module);
