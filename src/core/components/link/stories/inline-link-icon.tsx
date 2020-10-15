import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { textSans } from "@guardian/src-foundations/typography"
import { Link, linkDefault } from "../index"
import { SvgArrowRightStraight, SvgCamera } from "@guardian/src-icons"

const text = css`
	${textSans.medium()}
`

export const inlineLinkIcon = () => (
	<ThemeProvider theme={linkDefault}>
		<p css={text}>
			You can <Link iconSide="right" icon={<SvgArrowRightStraight />} subdued={true} href="#">click this link to read more and find out all the important information</Link> about our services
		</p>
		<p css={text}>
			You can <Link iconSide="left" icon={<SvgCamera />} subdued={true} href="#">click this link to read more and find out all the important information</Link> about our services
		</p>
	</ThemeProvider>
)
inlineLinkIcon.story = { name: "inline link icon" }
