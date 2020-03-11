import React from "react"
import { addParameters, addDecorator } from "@storybook/react"
import { useEffect } from "@storybook/addons"
import { FocusStyleManager } from "@guardian/src-foundations/utils"
import { breakpoints } from "@guardian/src-foundations"

const storiesOnly = process.env.NODE_ENV === "production"
const viewportEntries = Object.entries(breakpoints).map(([name, width]) => {
	return [
		name,
		{
			name,
			styles: {
				width: `${width}px`,
				height: "100%",
			},
		},
	]
})
const viewports = Object.fromEntries(viewportEntries)

addParameters({
	// We hide the toolbar by default to make Storybook embeds
	// look nicer in Zeroheight. Related discussion:
	// https://github.com/storybookjs/storybook/issues/8129
	// https://spectrum.chat/zeroheight/feature-requests/swap-out-storybook-stories-in-situ~29d7760d-aba6-4bb3-bf4a-37c119dbc622
	options: {
		isToolshown: !storiesOnly,
		isFullscreen: storiesOnly,
	},
	viewport: {
		viewports,
		defaultViewport: "wide",
	},
})

const FocusManagerDecorator = storyFn => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs()
	})

	return <div>{storyFn()}</div>
}

addDecorator(FocusManagerDecorator)
