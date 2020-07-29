import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { textSans } from "@guardian/src-foundations/typography"
import { ButtonLink, linkDefault } from "../index"

const text = css`
	${textSans.medium()}
`

export const inlineButtonLink = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			Please{" "}
			<ButtonLink onClick={() => console.log("Button link clicked")}>
				click me
			</ButtonLink>
			. Thanks!
		</p>
	</ThemeProvider>
)
inlineButtonLink.story = { name: "inline button links" }
