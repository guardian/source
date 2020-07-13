import React from "react"
import { ThemeProvider } from "emotion-theming"

import { Checkbox, checkboxDefault } from "../index"

const unlabelled = () => (
	<ThemeProvider theme={checkboxDefault}>
		<Checkbox
			value="today_uk"
			defaultChecked={true}
			aria-label="Today UK"
		/>
	</ThemeProvider>
)

unlabelled.story = {
	name: "unlabelled",
}

export { unlabelled }
