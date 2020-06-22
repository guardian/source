import React from "react"
import { css } from "@emotion/core"
import { SvgArrowRightStraight } from "@guardian/src-icons"
import { space } from "@guardian/src-foundations"
import { LinkButton } from "../index"

/* eslint-disable react/jsx-key */
const priorityLinkButtons = [
	<LinkButton href="#">Primary</LinkButton>,
	<LinkButton href="#" priority="secondary">
		Secondary
	</LinkButton>,
	<LinkButton href="#" priority="tertiary">
		Tertiary
	</LinkButton>,
	<LinkButton href="#" priority="subdued">
		Subdued
	</LinkButton>,
]
const priorityIconLinkButtons = [
	<LinkButton href="#" iconSide="right" icon={<SvgArrowRightStraight />}>
		Primary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="secondary"
	>
		Secondary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="tertiary"
	>
		Tertiary
	</LinkButton>,
	<LinkButton
		href="#"
		iconSide="right"
		icon={<SvgArrowRightStraight />}
		priority="subdued"
	>
		Subdued
	</LinkButton>,
]

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`
const spacer = css`
	margin-bottom: ${space[3]}px;
`

export const priorityLinkButtonsLight = () => (
	<>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityIconLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
	</>
)
priorityLinkButtonsLight.story = { name: "priority link buttons" }
