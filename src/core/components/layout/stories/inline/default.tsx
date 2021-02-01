import React from "react";
import { css } from "@emotion/react";
import { Inline } from "../../index";
import { textSans } from "@guardian/src-foundations/typography";
import { sport } from "@guardian/src-foundations/palette";

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`;

export const noSpace = () => (
	<Inline>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

noSpace.story = {
	name: "no space",
};

export const space1 = () => (
	<Inline space={1}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space1.story = {
	name: "space 1",
};

export const space2 = () => (
	<Inline space={2}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space2.story = {
	name: "space 2",
};

export const space3 = () => (
	<Inline space={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space3.story = {
	name: "space 3",
};

export const space4 = () => (
	<Inline space={4}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space4.story = {
	name: "space 4",
};

export const space5 = () => (
	<Inline space={5}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space5.story = {
	name: "space 5",
};

export const space6 = () => (
	<Inline space={6}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space6.story = {
	name: "space 6",
};

export const space9 = () => (
	<Inline space={9}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space9.story = {
	name: "space 9",
};

export const space12 = () => (
	<Inline space={12}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space12.story = {
	name: "space 12",
};

export const space24 = () => (
	<Inline space={24}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Inline>
);

space24.story = {
	name: "space 24",
};

export const lotsOfItems = () => (
	<Inline space={4}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
		<div css={contents}>Item 4</div>
		<div css={contents}>Item 5</div>
		<div css={contents}>Item 6</div>
		<div css={contents}>Item 7</div>
		<div css={contents}>Item 8</div>
		<div css={contents}>Item 9</div>
	</Inline>
);

lotsOfItems.story = {
	name: "lots of items",
};
