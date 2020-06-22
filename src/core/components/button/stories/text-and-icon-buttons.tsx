import React from "react"
import { css } from "@emotion/core"
import { SvgCheckmark } from "@guardian/src-icons"
import { space } from "@guardian/src-foundations"
import { Button } from "../index"

/* eslint-disable react/jsx-key */
const textIconButtons = [
	<Button icon={<SvgCheckmark />}>Button: icon to the left</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />}>
		Button: icon to the right
	</Button>,
]

const textIconButtonsSmall = [
	<Button icon={<SvgCheckmark />} size="small">
		Small button: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="small">
		Small button: to the right
	</Button>,
]

const textIconButtonsXsmall = [
	<Button icon={<SvgCheckmark />} size="xsmall">
		Extra small button: to the left
	</Button>,
	<Button iconSide="right" icon={<SvgCheckmark />} size="xsmall">
		Extra small button: to the right
	</Button>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`

const bottomSpacer = css`
	margin-bottom: ${space[9]}px;
`

export const textAndIconButtons = () => (
	<div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsSmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{textIconButtonsXsmall.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</div>
)
textAndIconButtons.story = {
	name: "text and icon buttons",
}
