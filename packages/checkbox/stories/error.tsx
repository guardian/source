import React from "react"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

import { CheckboxGroup, Checkbox, checkboxLight, checkboxBrand } from "../index"

const errorLight = () => (
	<ThemeProvider theme={checkboxLight}>
		<CheckboxGroup
			name="tandcs"
			error="Tick the box to accept the terms and conditions"
		>
			<Checkbox
				value="tandcs-accept"
				label="I understand the terms and conditions"
			/>
		</CheckboxGroup>
	</ThemeProvider>
)

errorLight.story = {
	name: "error light",
}

const errorBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<CheckboxGroup
			name="tandcs"
			error="Tick the box to accept the terms and conditions"
		>
			<Checkbox
				value="tandcs-accept"
				label="I understand the terms and conditions"
			/>
		</CheckboxGroup>
	</ThemeProvider>
)

errorBlue.story = {
	name: "error blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export { errorLight, errorBlue }
