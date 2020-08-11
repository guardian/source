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
