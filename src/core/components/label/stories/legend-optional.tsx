import React from "react"
import { css } from "@emotion/core"
import { Legend, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

const fieldsetReset = css`
	border: 0;
	padding: 0;
	margin: 0;
`

export const optionalLight = () => (
	<fieldset css={fieldsetReset}>
		<Legend text="Subscribe to our newsletters" optional={true} />
	</fieldset>
)

optionalLight.story = {
	name: "optional light",
}

export const optionalBlue = () => (
	<fieldset css={fieldsetReset}>
		<ThemeProvider theme={labelBrand}>
			<Legend text="Subscribe to our newsletters" optional={true} />
		</ThemeProvider>
	</fieldset>
)

optionalBlue.story = {
	name: "optional blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
