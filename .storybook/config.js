import { configure, addParameters } from "@storybook/react";
import { palette } from "@guardian/src-foundations/palette";

addParameters({
	backgrounds: [
		{ name: "light", value: palette.neutrals[100], default: true },
		{ name: "dark", value: palette.brand.main }
	]
});

function loadStories() {
	require("../packages/foundations/stories.js");
	require("../packages/button/stories.js");
	require("../packages/dropdown/stories.js");
	require("../packages/radio/stories.js");
}

configure(loadStories, module);
