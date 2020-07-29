import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { space } from "@guardian/src-foundations"
import { Link, linkDefault } from "../index"

/* eslint-disable react/jsx-key */
const subduedLinks = [
	<Link subdued={true} href="#">
		Primary subdued
	</Link>,
	<Link subdued={true} priority="secondary" href="#">
		Secondary subdued
	</Link>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> * {
		margin-right: ${space[9]}px;
	}
`
export const subduedLight = () => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{subduedLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
subduedLight.story = { name: "subdued light" }
