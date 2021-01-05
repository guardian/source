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

export const errorWithMessageLight = () => (
	<div css={constrainedWith}>
		<Select
			label="State"
			error="Please select your home state. This service is unavailable outside of the US."
		>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
)

errorWithMessageLight.story = {
	name: "error with message  light",
}
