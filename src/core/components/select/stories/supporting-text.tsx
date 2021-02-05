import React from "react";
import { css } from "@emotion/react";
import { from } from "@guardian/src-foundations/mq";
import { Select, Option } from "../index";

const constrainedWith = css`
	width: 100%;
	${from.phablet} {
		width: 25em;
	}
`;
export const supportingTextLight = () => (
	<div css={constrainedWith}>
		<Select
			label="State"
			supporting="Leave blank if you are not within the US"
		>
			<Option value="">Select a state</Option>
			<Option value="al">Alabama</Option>
			<Option value="ca">California</Option>
		</Select>
	</div>
);

supportingTextLight.story = {
	name: "supporting text light",
};
