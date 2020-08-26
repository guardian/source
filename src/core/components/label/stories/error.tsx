import React from "react"
import { Label, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

export const withErrorMessageLight = () => (
	<Label text="First name" error="Enter your first name below" />
)

withErrorMessageLight.story = {
	name: `with error message light`,
}

export const withErrorMessageBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="First name" error="Enter your first name below" />
	</ThemeProvider>
)

withErrorMessageBlue.story = {
	name: `with error message blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
