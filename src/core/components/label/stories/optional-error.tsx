import React from "react"
import { Label, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

export const optionalWithErrorMessageLight = () => (
	<Label
		text="Telephone number"
		error="The number must have at least 11 digits"
		optional={true}
	/>
)

optionalWithErrorMessageLight.story = {
	name: `optional with error message light`,
}

export const optionalWithErrorMessageBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label
			text="Telephone number"
			error="The number must have at least 11 digits"
			optional={true}
		/>
	</ThemeProvider>
)

optionalWithErrorMessageBlue.story = {
	name: `optional with error message blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
