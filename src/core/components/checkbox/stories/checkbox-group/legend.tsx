import React from "react"
import { ThemeProvider } from "emotion-theming"
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

const legendLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup name="emails" label="Email newsletters" id="emails">
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

legendLight.story = {
	name: "legend light",
}

const legendBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<CheckboxGroup name="emails" label="Email newsletters" id="emails">
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

legendBlue.story = {
	name: "legend blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export { legendLight, legendBlue }
