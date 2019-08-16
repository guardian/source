import { configure, addParameters } from "@storybook/react";
import { palette } from "@guardian/src-foundations/palette";

addParameters({
	backgrounds: [
		{ name: "light", value: palette.neutral[100], default: true },
		{ name: "dark", value: palette.brand.main }
	]
});

function loadStories() {
	require("../packages/foundations/stories.jsx");
	require("../packages/button/stories.jsx");
	require("../packages/radio/stories.jsx");
}

configure(loadStories, module);
