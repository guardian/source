import React from "react"
import { css } from "@emotion/react"
import { from } from "@guardian/src-foundations/mq"
import { Select, Option } from "../index"

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 25em;
	}
`

export const hideLabelLight = () => (
	<div css={constrainedWith}>
		<Select label="State" hideLabel={true}>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
)

hideLabelLight.story = {
	name: "visually hide label light",
}
