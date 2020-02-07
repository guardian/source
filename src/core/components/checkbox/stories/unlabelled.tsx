import React from "react"
import { ThemeProvider } from "emotion-theming"

import { CheckboxGroup, Checkbox, checkboxDefault } from "../index"

/* eslint-disable react/jsx-key */
const checkboxes = [<Checkbox value="today_uk" aria-label="Today UK" />]
/* eslint-enable react/jsx-key */

const unlabelled = () => (
	<ThemeProvider theme={checkboxDefault}>
		<CheckboxGroup name="emails">
			{checkboxes.map((checkbox, index) =>
				React.cloneElement(checkbox, { key: index }),
			)}
		</CheckboxGroup>
	</ThemeProvider>
)

unlabelled.story = {
	name: "unlabelled",
}

export { unlabelled }
