import React from "react";
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { space } from "@guardian/src-foundations";
import { ButtonLink, linkDefault } from "../index";

/* eslint-disable react/jsx-key */
const buttonLinks = [
	<ButtonLink onClick={() => console.log("Primary clicked")}>
		Primary
	</ButtonLink>,
	<ButtonLink
		priority="secondary"
		onClick={() => console.log("Secondary clicked")}
	>
		Secondary
	</ButtonLink>,
];
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> * {
		margin-right: ${space[9]}px;
	}
`;

export const buttonLinkLight = () => (
	<ThemeProvider theme={linkDefault}>
		<div css={flexStart}>
			{buttonLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
);
buttonLinkLight.story = { name: "button links light" };
