import React from "react"
import { css } from "@emotion/core"
import { from } from "@guardian/src-foundations/mq"
import { Select, Option } from "../index"

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 25em;
	}
`

export const successWithMessageLight = () => (
	<div css={constrainedWith}>
		<Select label="State" success="This service is available in your state">
			<Option value="">Select a state</Option>
			<Option value="al" selected={true}>
				Alabama
			</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
)

successWithMessageLight.story = {
	name: "success with message light",
}
