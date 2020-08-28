import React from "react"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

import {
	CheckboxGroup,
	Checkbox,
	checkboxDefault,
	checkboxBrand,
} from "../../index"

const errorLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup
			id="tandcs"
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
			id="tandcs"
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
