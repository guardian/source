import React from "react";
import { Tiles } from "../../index";
import { sport } from "@guardian/src-foundations/palette";
import { css } from "@emotion/react";
import { textSans } from "@guardian/src-foundations/typography";

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`;

export const collapseBelowTablet = () => (
	<Tiles columns={4} collapseBelow="tablet">
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
		<div css={contents}>Item 4</div>
	</Tiles>
);

collapseBelowTablet.story = {
	name: "collapse below tablet",
	parameters: {
		viewport: { defaultViewport: "phablet" },
	},
};
