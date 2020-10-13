import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { textSans } from "@guardian/src-foundations/typography"
import { Link, linkDefault } from "../index"
import { SvgArrowRightStraight } from "@guardian/src-icons"

const text = css`
	${textSans.medium()}
`

export const inlineLinkIcon = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can <Link iconSide="right" icon={<SvgArrowRightStraight />} subdued={true} href="#">read more</Link> about our services
		</p>
	</ThemeProvider>
)
inlineLinkIcon.story = { name: "inline link icon" }
