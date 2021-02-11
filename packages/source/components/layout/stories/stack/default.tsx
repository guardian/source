import React from 'react';
import { css } from '@emotion/react';
import { Stack } from '../../index';
import { textSans } from '../../../../foundations/src/typography';
import { sport } from '../../../../foundations/src/palette';

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`;

export const noSpace = () => (
	<Stack>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

noSpace.story = {
	name: 'no space',
};

export const space1 = () => (
	<Stack space={1}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space1.story = {
	name: 'space 1',
};

export const space2 = () => (
	<Stack space={2}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space2.story = {
	name: 'space 2',
};

export const space3 = () => (
	<Stack space={3}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space3.story = {
	name: 'space 3',
};

export const space4 = () => (
	<Stack space={4}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space4.story = {
	name: 'space 4',
};

export const space5 = () => (
	<Stack space={5}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space5.story = {
	name: 'space 5',
};

export const space6 = () => (
	<Stack space={6}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space6.story = {
	name: 'space 6',
};

export const space9 = () => (
	<Stack space={9}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space9.story = {
	name: 'space 9',
};

export const space12 = () => (
	<Stack space={12}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space12.story = {
	name: 'space 12',
};

export const space24 = () => (
	<Stack space={24}>
		<div css={contents}>Item 1</div>
		<div css={contents}>Item 2</div>
		<div css={contents}>Item 3</div>
	</Stack>
);

space24.story = {
	name: 'space 24',
};
