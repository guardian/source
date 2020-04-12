import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { storybookBackgrounds } from "@guardian/src-helpers"
import { brand } from "@guardian/src-foundations/themes"

import { iconDefault, iconSmall } from "../components/button/styles"

import {
	SvgAlert,
	SvgArrowDownStraight,
	SvgArrowLeftStraight,
	SvgArrowRightStraight,
	SvgArrowUpStraight,
	SvgCheckmark,
	SvgChevronDownSingle,
	SvgChevronLeftSingle,
	SvgChevronRightSingle,
	SvgChevronUpSingle,
	SvgClose,
	SvgCreditCard,
	SvgDirectDebit,
	SvgExternal,
	SvgIndent,
	SvgMinus,
	SvgPayPal,
	SvgPlus,
	SvgGuardianRoundel,
} from "./index"

const whiteColor = css`
	color: white;
	svg {
		fill: white;
	}
`

const Small = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconSmall, whiteColor]}>{children}</div>
)

const Default = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconDefault]}>{children}</div>
)

export default {
	title: "Icons",
}

export const SmallIcons = () => (
	<ThemeProvider theme={brand}>
		<Small>
			<SvgAlert />
			<SvgArrowDownStraight />
			<SvgArrowLeftStraight />
			<SvgArrowRightStraight />
			<SvgArrowUpStraight />
			<SvgChevronDownSingle />
			<SvgChevronLeftSingle />
			<SvgChevronRightSingle />
			<SvgChevronUpSingle />
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
			<SvgExternal />
			<SvgCheckmark />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgIndent />
			<SvgGuardianRoundel />
		</Small>
	</ThemeProvider>
)
SmallIcons.story = {
	name: "small size",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const DefaultIcons = () => (
	<ThemeProvider theme={brand}>
		<Default>
			<SvgAlert />
			<SvgArrowDownStraight />
			<SvgArrowLeftStraight />
			<SvgArrowRightStraight />
			<SvgArrowUpStraight />
			<SvgChevronDownSingle />
			<SvgChevronLeftSingle />
			<SvgChevronRightSingle />
			<SvgChevronUpSingle />
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
			<SvgExternal />
			<SvgCheckmark />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgIndent />
			<SvgGuardianRoundel />
		</Default>
	</ThemeProvider>
)
DefaultIcons.story = {
	name: "default size",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
