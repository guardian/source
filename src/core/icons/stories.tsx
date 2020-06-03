import React from "react"
import { css } from "@emotion/core"

import { storybookBackgrounds } from "@guardian/src-helpers"
import { width, height } from "@guardian/src-foundations/size"

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
	SvgCross,
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

const iconWhite = css`
	color: white;
`

const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
	}
`

const iconMedium = css`
	${icon};
	svg {
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
	}
`

const iconSmall = css`
	${icon};
	svg {
		width: ${width.iconSmall}px;
		height: ${width.iconSmall}px;
	}
`

const iconXsmall = css`
	${icon};
	svg {
		width: ${width.iconXsmall}px;
		height: ${width.iconXsmall}px;
	}
`

const paymentIconMedium = css`
	${icon};
	svg {
		height: ${width.iconPayment}px;
		padding-bottom: 10px;
	}
`

const Xsmall = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={iconXsmall}>{children}</div>
)

const Small = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={iconSmall}>{children}</div>
)

const Medium = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={iconMedium}>{children}</div>
)

const MediumBrand = ({
	children,
}: {
	children: JSX.Element | JSX.Element[]
}) => <div css={[iconMedium, iconWhite]}>{children}</div>

const Payment = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<div css={paymentIconMedium}>{children}</div>
)

export default {
	title: "Icons",
}

export const XsmallIcons = () => (
	<>
		<Xsmall>
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
			<SvgCross />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</Xsmall>
	</>
)
XsmallIcons.story = {
	name: "xsmall light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
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
			<SvgCross />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</Small>
	</>
)
SmallIcons.story = {
	name: "small light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const MediumIcons = () => (
	<>
		<Medium>
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
			<SvgCross />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</Medium>
	</>
)
MediumIcons.story = {
	name: "medium light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const MediumBrandIcons = () => (
	<>
		<MediumBrand>
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
			<SvgCross />
			<SvgMinus />
			<SvgPlus />
			<SvgQuote />
			<SvgIndent />
			<SvgSpeechBubble />
			<SvgStar />
		</MediumBrand>
	</>
)

MediumBrandIcons.story = {
	name: "medium brand",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const PaymentIcons = () => (
	<Payment>
		<SvgCreditCard />
		<SvgDirectDebit />
		<SvgPayPal />
	</Payment>
)

PaymentIcons.story = {
	name: "payment icons light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
