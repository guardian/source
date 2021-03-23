import React from 'react';
import { Container, Columns, Column } from '../../index';
import { sport } from '@guardian/src-foundations/palette';
import { css } from '@emotion/react';
import { ColumnsSpaceY } from '../../components/columns/columns';

const defaultStoryOptions = {
	parameters: {
		viewport: { defaultViewport: 'phablet' },
		layout: 'fullscreen',
	},
};

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`;

const collapseBelowTabletWithSpace = (space?: ColumnsSpaceY) => (
	<Container border={true}>
		<Columns collapseBelow="tablet" spaceY={space}>
			<Column>
				<div css={contents}>1</div>
			</Column>
			<Column>
				<div css={contents}>2</div>
			</Column>
			<Column>
				<div css={contents}>3</div>
			</Column>
			<Column>
				<div css={contents}>4</div>
			</Column>
		</Columns>
	</Container>
);

export const collapseBelowTablet = () => collapseBelowTabletWithSpace();

collapseBelowTablet.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with no spacing',
};

export const collapseBelowTabletWithSpace1 = () =>
	collapseBelowTabletWithSpace(1);

collapseBelowTabletWithSpace1.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 1',
};

export const collapseBelowTabletWithSpace2 = () =>
	collapseBelowTabletWithSpace(2);

collapseBelowTabletWithSpace2.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 2',
};

export const collapseBelowTabletWithSpace3 = () =>
	collapseBelowTabletWithSpace(3);

collapseBelowTabletWithSpace3.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 3',
};

export const collapseBelowTabletWithSpace4 = () =>
	collapseBelowTabletWithSpace(4);

collapseBelowTabletWithSpace4.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 4',
};

export const collapseBelowTabletWithSpace5 = () =>
	collapseBelowTabletWithSpace(5);

collapseBelowTabletWithSpace5.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 5',
};

export const collapseBelowTabletWithSpace6 = () =>
	collapseBelowTabletWithSpace(6);

collapseBelowTabletWithSpace6.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 6',
};

export const collapseBelowTabletWithSpace9 = () =>
	collapseBelowTabletWithSpace(9);

collapseBelowTabletWithSpace9.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 9',
};

export const collapseBelowTabletWithSpace12 = () =>
	collapseBelowTabletWithSpace(12);

collapseBelowTabletWithSpace12.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 12',
};

export const collapseBelowTabletWithSpace24 = () =>
	collapseBelowTabletWithSpace(24);

collapseBelowTabletWithSpace24.story = {
	...defaultStoryOptions,
	name: 'collapse below tablet with space 24',
};
