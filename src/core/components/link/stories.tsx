import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	SvgArrowRightStraight,
	SvgIndent,
	SvgExternal,
	SvgChevronLeftSingle,
} from "@guardian/src-icons"
import { space } from "@guardian/src-foundations"
import { Link, linkLight, linkBrandYellow, linkBrand } from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="#">Primary</Link>,
	<Link priority="secondary" href="#">
		Secondary
	</Link>,
]
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
		<Link href="#">Primary</Link>
	</ThemeProvider>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const priorityYellow = () => (
	<ThemeProvider theme={linkBrandYellow}>
		<Link href="#">Primary</Link>
	</ThemeProvider>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brandAlt),
		],
	},
}

const spacer = css`
	margin-bottom: 1rem;
`

export const subduedLight = () => (
	<ThemeProvider theme={linkLight}>
		<div css={flexStart}>
			{subduedLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
subduedLight.story = { name: "subdued light" }

export const textAndIcon = () => (
	<>
		<div css={spacer}>
			<Link icon={<SvgExternal />} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={[flexStart, spacer]}>
			<Link icon={<SvgChevronLeftSingle />} href="#">
				Previous
			</Link>
			<Link iconSide="right" icon={<SvgArrowRightStraight />} href="#">
				Next
			</Link>
		</div>
		<div css={spacer}>
			<Link iconSide="left" icon={<SvgIndent />} href="#">
				Indent
			</Link>
		</div>
	</>
)
textAndIcon.story = {
	name: "text and icon",
}
