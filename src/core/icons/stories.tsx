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
	SvgDirectDebitWide,
	SvgExternal,
	SvgIndent,
	SvgMinus,
	SvgPayPal,
	SvgPlus,
	SvgQuote,
	SvgSpeechBubble,
	SvgStar,
	SvgTickRound,
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
		height: 30px;
		padding-bottom: 10px;
	}
`

const widePaymentIconMedium = css`
	${icon};
	svg {
		height: 20px;
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

const WidePayment = ({
	children,
}: {
	children: JSX.Element | JSX.Element[]
}) => <div css={widePaymentIconMedium}>{children}</div>

/* eslint-disable react/jsx-key */
const uiIcons = [
	<SvgAlert />,
	<SvgArrowDownStraight />,
	<SvgArrowLeftStraight />,
	<SvgArrowRightStraight />,
	<SvgArrowUpStraight />,
	<SvgChevronDownSingle />,
	<SvgChevronLeftSingle />,
	<SvgChevronRightSingle />,
	<SvgChevronUpSingle />,
	<SvgExternal />,
	<SvgCheckmark />,
	<SvgCamera />,
	<SvgCross />,
	<SvgMinus />,
	<SvgPlus />,
	<SvgQuote />,
	<SvgIndent />,
	<SvgSpeechBubble />,
	<SvgStar />,
	<SvgTickRound />,
]
/* eslint-enable react/jsx-key */

export default {
	title: "Icons",
}

export const XsmallIcons = () => (
	<>
		<Xsmall>
			{uiIcons.map((icon, index) =>
				React.cloneElement(icon, { key: index }),
			)}
		</Xsmall>
	</>
)
XsmallIcons.story = {
	name: "ui icons xsmall light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
export const SmallIcons = () => (
	<>
		<Small>
			{uiIcons.map((icon, index) =>
				React.cloneElement(icon, { key: index }),
			)}
		</Small>
	</>
)
SmallIcons.story = {
	name: "ui icons small light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const MediumIcons = () => (
	<>
		<Medium>
			{uiIcons.map((icon, index) =>
				React.cloneElement(icon, { key: index }),
			)}
		</Medium>
	</>
)
MediumIcons.story = {
	name: "ui icons medium light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}

export const MediumBrandIcons = () => (
	<>
		<MediumBrand>
			{uiIcons.map((icon, index) =>
				React.cloneElement(icon, { key: index }),
			)}
		</MediumBrand>
	</>
)

MediumBrandIcons.story = {
	name: "ui icons medium brand",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const PaymentIcons = () => (
	<>
		<Payment>
			<SvgCreditCard />
			<SvgDirectDebit />
			<SvgPayPal />
		</Payment>
		<WidePayment>
			<SvgDirectDebitWide />
		</WidePayment>
	</>
)

PaymentIcons.story = {
	name: "payment icons light",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
