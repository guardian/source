import React from "react"
import { css } from "@emotion/core"

import { storybookBackgrounds } from "@guardian/src-helpers"

import {
	SvgAlert,
	SvgArrowDownStraight,
	SvgArrowLeftStraight,
	SvgArrowRightStraight,
	SvgArrowUpStraight,
	SvgCamera,
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
	SvgQuote,
	SvgSpeechBubble,
	SvgStar,
} from "./index"

const whiteColor = css`
	color: white;
	svg {
		fill: white;
	}
`

const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: 30px;
		height: 30px;
	}
`

const paymentIconDefault = css`
	svg {
		height: 20px;
		padding-bottom: 10px;
	}
`

const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: 15px;
		height: 15px;
	}
`

const paymentIconSmall = css`
	svg {
		height: 10px;
		padding-bottom: 5px;
	}
`

const Small = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconSmall, whiteColor]}>{children}</div>
)

const SmallPayment = ({
	children,
}: {
	children: JSX.Element | JSX.Element[]
}) => <div css={[iconSmall, paymentIconSmall, whiteColor]}>{children}</div>

const Default = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={[iconDefault]}>{children}</div>
)

const DefaultPayment = ({
	children,
}: {
	children: JSX.Element | JSX.Element[]
}) => <div css={[iconDefault, paymentIconDefault]}>{children}</div>

export default {
	title: "SVGs",
}

export const SmallIcons = () => (
	<>
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
			<SvgExternal />
			<SvgCheckmark />
			<SvgCamera />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</Small>

		<SmallPayment>
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
		</SmallPayment>
	</>
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
	<>
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
			<SvgExternal />
			<SvgCheckmark />
			<SvgCamera />
			<SvgClose />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</Default>

		<DefaultPayment>
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
		</DefaultPayment>
	</>
)
DefaultIcons.story = {
	name: "default size",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
