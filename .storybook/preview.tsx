import React from "react"
import { addParameters, addDecorator } from "@storybook/react"
import { useEffect } from "@storybook/addons"
import { FocusStyleManager } from "@guardian/src-foundations/utils"
import { breakpoints, Breakpoint } from "@guardian/src-foundations"

const isProd = process.env.NODE_ENV === "production"

type ViewportMeta = {
	[key in Breakpoint]: {
		name: string
		type: string
	}
}
const viewportMeta: ViewportMeta = {
	mobile: {
		name: "Mobile",
		type: "mobile",
	},
	mobileMedium: {
		name: "Mobile Medium",
		type: "mobile",
	},
	mobileLandscape: {
		name: "Mobile Landscape",
		type: "mobile",
	},
	phablet: {
		name: "Phablet",
		type: "mobile",
	},
	tablet: {
		name: "Tablet",
		type: "tablet",
	},
	desktop: {
		name: "Desktop",
		type: "desktop",
	},
	leftCol: {
		name: "Left Col",
		type: "desktop",
	},
	wide: {
		name: "Wide",
		type: "desktop",
	},
}
const viewportEntries = Object.entries(breakpoints).map(([name, width]) => {
	return [
		name,
		{
			name: viewportMeta[name].name,
			styles: {
				width: `${width}px`,
				height: "100%",
			},
			type: viewportMeta[name].type,
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
		isToolshown: !isProd,
		isFullscreen: isProd,
	},
	viewport: {
		viewports,
		defaultViewport: "responsive",
	},
})

const FocusManagerDecorator = storyFn => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs()
	})

	return <div>{storyFn()}</div>
}

addDecorator(FocusManagerDecorator)
