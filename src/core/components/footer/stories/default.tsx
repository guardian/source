import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { Footer } from "../index"

export const defaultBlue = () => <Footer />

defaultBlue.story = {
	name: "default blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const defaultBlueTablet = () => <Footer />

defaultBlueTablet.story = {
	name: "default blue tablet",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
		viewport: { defaultViewport: "tablet" },
	},
}

export const defaultBlueMobile = () => <Footer />

defaultBlueMobile.story = {
	name: "default blue mobile",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
		viewport: { defaultViewport: "mobileMedium" },
	},
}
