import React from "react"
import { ThemeProvider } from "emotion-theming"

import { CheckboxGroup, Checkbox, checkboxDefault } from "../index"

const required = () => (
	<form onSubmit={e => e.preventDefault()}>
		<ThemeProvider theme={checkboxDefault}>
			<CheckboxGroup name="emails">
				<Checkbox
					label="Accept terms"
					value="accept_terms"
					required={true}
				/>
			</CheckboxGroup>
		</ThemeProvider>
		<button type="submit">Submit</button>
	</form>
)

required.story = {
	name: "required",
}

export { required }
