import { configure, addParameters } from "@storybook/react"

function loadStories() {
	require("../packages/button/stories.tsx")
	require("../packages/radio/stories.tsx")
	require("../packages/text-input/stories.tsx")
}

// We hide the toolbar by default to make Storybook embeds
// look nicer in Zeroheight. Related discussion:
// https://github.com/storybookjs/storybook/issues/8129
// https://spectrum.chat/zeroheight/feature-requests/swap-out-storybook-stories-in-situ~29d7760d-aba6-4bb3-bf4a-37c119dbc622

addParameters({
	options: {
		isToolshown: false,
		isFullscreen: true,
	},
})

configure(loadStories, module)
