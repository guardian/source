import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { Footer } from "../index"

export const defaultBlue = () => <Footer />

defaultBlue.story = {
	name: "default blue",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}

export const defaultBlueTablet = () => <Footer />

defaultBlueTablet.story = {
	name: "default blue tablet",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: "tablet" },
	},
}

export const defaultBlueMobile = () => <Footer />

defaultBlueMobile.story = {
	name: "default blue mobile",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
		viewport: { defaultViewport: "mobileMedium" },
	},
}
