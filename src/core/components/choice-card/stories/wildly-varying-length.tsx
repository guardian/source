import React from "react";
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { ChoiceCardGroup, ChoiceCard, choiceCardDefault } from "../index";

/* eslint-disable react/jsx-key */
const wildlyVaryingContentChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="A very, very long piece of text"
		id="option-1"
	/>,
	<ChoiceCard value="option-2" label="Something in between" id="option-2" />,
	<ChoiceCard value="option-3" label="Short" id="option-3" />,
];
/* eslint-enable react/jsx-key */

const wide = css`
	width: 40em;
`;

export const wildlyVaryingLengthLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={wide}>
			<ChoiceCardGroup name="options">
				{wildlyVaryingContentChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index })
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
);

wildlyVaryingLengthLight.story = {
	name: `single state wildly varying length light`,
};
