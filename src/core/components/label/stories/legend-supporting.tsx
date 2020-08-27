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

export const withSupportingTextLight = () => (
	<fieldset css={fieldsetReset}>
		<Legend
			text="Subscribe to our newsletters"
			supporting="Select as many as you like"
		/>
	</fieldset>
)

withSupportingTextLight.story = {
	name: `with supporting text light`,
}

export const withSupportingTextBlue = () => (
	<fieldset css={fieldsetReset}>
		<ThemeProvider theme={labelBrand}>
			<Legend
				text="Subscribe to our newsletters"
				supporting="Select as many as you like"
			/>
		</ThemeProvider>
	</fieldset>
)

withSupportingTextBlue.story = {
	name: `with supporting text blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
