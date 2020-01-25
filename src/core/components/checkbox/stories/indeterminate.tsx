import React from "react"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

import { Checkbox, checkboxLight, checkboxBrand } from "../index"

const indeterminateLight = () => (
	<ThemeProvider theme={checkboxLight}>
		<Checkbox
			indeterminate={true}
			value="indeterminate"
			label="Indeterminate"
		/>
	</ThemeProvider>
)

indeterminateLight.story = {
	name: "indeterminate light",
}

const indeterminateBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<Checkbox
			indeterminate={true}
			value="indeterminate"
			label="Indeterminate"
		/>
	</ThemeProvider>
)

indeterminateBlue.story = {
	name: "indeterminate blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export { indeterminateLight, indeterminateBlue }
