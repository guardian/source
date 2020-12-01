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

const legendErrorLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup
			name="emails"
			label="Email newsletters"
			id="emails"
			error="Please select at least one newsletter to continue"
		>
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

legendErrorLight.story = {
	name: "legend and error light",
}

const legendErrorBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<CheckboxGroup
			name="emails"
			label="Email newsletters"
			id="emails"
			error="Please select at least one newsletter to continue"
		>
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

legendErrorBlue.story = {
	name: "legend and error blue",
	parameters: {
		backgrounds: {
			default: "brand",
			values: [storybookBackgrounds.brand],
		},
	},
}

export { legendErrorLight, legendErrorBlue }
