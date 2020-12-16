import React from "react"
import { css } from "@emotion/react"
import { SvgCross } from "@guardian/src-icons"
import { space } from "@guardian/src-foundations"
import { LinkButton } from "../index"

/* eslint-disable react/jsx-key */
const iconLinkButtons = [
	<LinkButton href="#" icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
	<LinkButton href="#" size="small" icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
	<LinkButton href="#" size="xsmall" icon={<SvgCross />} hideLabel={true}>
		Dismiss the subscribe banner
	</LinkButton>,
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

export const iconOnlyLinkButtons = () => (
	<div css={flexStart}>
		{iconLinkButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
iconOnlyLinkButtons.story = {
	name: "icon only link buttons",
}
