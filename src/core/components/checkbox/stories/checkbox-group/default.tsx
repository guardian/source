import React from "react"
import { ThemeProvider } from "@emotion/react"
import { storybookBackgrounds } from "@guardian/src-helpers"

import {
	CheckboxGroup,
	Checkbox,
	checkboxDefault,
	checkboxBrand,
} from "../../index"

/* eslint-disable react/jsx-key */
const checkboxes = [
	<Checkbox label="Guardian Today: UK" value="today_uk" />,
	<Checkbox label="Guardian Today: US" value="today_us" />,
]
/* eslint-enable react/jsx-key */

const defaultLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup name="emails">
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

defaultLight.story = {
	name: "default light",
}

const defaultBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<CheckboxGroup name="emails">
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

defaultBlue.story = {
	name: "default blue",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}

export { defaultLight, defaultBlue }
