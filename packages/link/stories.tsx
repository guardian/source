import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { SvgCheckmark, SvgArrowRightStraight } from "@guardian/src-svgs"
import { size } from "@guardian/src-foundations"
import { Link, linkLight, linkBrandYellow, linkBrand } from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="#">Primary</Link>,
	<Link priority="secondary" href="#">
		Secondary
	</Link>,
]

const textIconLinks = [
	<Link icon={<SvgArrowRightStraight />} href="#">
		Icon to the left
	</Link>,
	<Link iconSide="right" icon={<SvgCheckmark />} href="#">
		Icon to the right
	</Link>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${size.medium}px;
	}
`

export default {
	title: "Link",
	component: Link,
}

export const priorityLight = () => (
	<ThemeProvider theme={linkLight}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityLight.story = { name: "priority light" }

export const priorityBlue = () => (
	<ThemeProvider theme={linkBrand}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.blue),
		],
	},
}

export const priorityYellow = () => (
	<ThemeProvider theme={linkBrandYellow}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.yellow),
		],
	},
}

export const textAndIcon = () => (
	<div css={flexStart}>
		{textIconLinks.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
textAndIcon.story = {
	name: "text and icon",
}
