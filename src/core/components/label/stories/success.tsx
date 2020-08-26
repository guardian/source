import React from "react"
import { Label, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

export const withSuccessMessageLight = () => (
	<Label text="Input Code" success="This code is valid" />
)

withSuccessMessageLight.story = {
	name: `with success message light`,
}

export const withSuccessMessageBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="Input Code" success="This code is valid" />
	</ThemeProvider>
)

withSuccessMessageBlue.story = {
	name: `with success message blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
