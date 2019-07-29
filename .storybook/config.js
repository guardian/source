import { configure } from "@storybook/react";

function loadStories() {
	require("../packages/button/stories.js");
}

configure(loadStories, module);
