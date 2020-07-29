import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { textSans } from "@guardian/src-foundations/typography"
import { Link, linkDefault } from "../index"

const text = css`
	${textSans.medium()}
`

export const inlineLink = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can <Link href="#">read more</Link> about our services
		</p>
	</ThemeProvider>
)
inlineLink.story = { name: "inline link" }
