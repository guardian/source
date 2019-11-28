import React from "react"
import { configure, addParameters, addDecorator } from "@storybook/react"
import { useEffect } from "@storybook/addons"
import { FocusStyleManager } from "@guardian/src-utilities"

const storiesOnly = process.env.NODE_ENV === "production"

// We hide the toolbar by default to make Storybook embeds
// look nicer in Zeroheight. Related discussion:
// https://github.com/storybookjs/storybook/issues/8129
// https://spectrum.chat/zeroheight/feature-requests/swap-out-storybook-stories-in-situ~29d7760d-aba6-4bb3-bf4a-37c119dbc622

addParameters({
	options: {
		isToolshown: !storiesOnly,
		isFullscreen: storiesOnly,
	},
})

configure(require.context("../packages", true, /stories\.tsx$/), module)

const FocusManagerDecorator = storyFn => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs()
	})

	return <div>{storyFn()}</div>
}

addDecorator(FocusManagerDecorator)
