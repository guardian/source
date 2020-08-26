import React from "react"
import { Label, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

export const defaultLight = () => <Label text="First name" />

defaultLight.story = {
	name: "default light",
}

export const defaultBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="First name" />
	</ThemeProvider>
)

defaultBlue.story = {
	name: "default blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
