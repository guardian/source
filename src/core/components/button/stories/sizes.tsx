import React from "react";
import { css } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { Button } from "../index";

/* eslint-disable react/jsx-key */
const defaultSizeButtons = [
	<Button>Default primary</Button>,
	<Button priority="subdued">Default subdued</Button>,
];
const smallSizeButtons = [
	<Button size="small">Small primary</Button>,
	<Button priority="subdued" size="small">
		Small subdued
	</Button>,
];
const xsmallSizeButtons = [
	<Button size="xsmall">Extra small primary</Button>,
	<Button priority="subdued" size="xsmall">
		Extra small subdued
	</Button>,
];
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`;

const bottomSpacer = css`
	margin-bottom: ${space[9]}px;
`;

export const sizes = () => (
	<div>
		<div css={[flexStart, bottomSpacer]}>
			{defaultSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{smallSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
		<div css={[flexStart, bottomSpacer]}>
			{xsmallSizeButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</div>
);
sizes.story = {
	name: "sizes",
};
