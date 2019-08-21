import { configure } from "@storybook/react";

function loadStories() {
	require("../packages/button/stories.tsx");
	require("../packages/radio/stories.tsx");
}

configure(loadStories, module);
