import React from 'react';
import { Container, Columns, Column } from '../../index';
import { textSans } from '@guardian/src-foundations/typography';
import { sport } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { css } from '@emotion/react';

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`;

const spaceOut = css`
	& > * + * {
		margin-top: ${space[5]}px !important;
	}
`;

const example = (
	<div css={spaceOut}>
		<Container>
			<Columns>
				<Column width={1 / 4}>
					<div css={contents}>1 / 4</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={1 / 3}>
					<div css={contents}>1 / 3</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={1 / 2}>
					<div css={contents}>1 / 2</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={3 / 4}>
					<div css={contents}>3 / 4</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
			</Columns>
		</Container>
	</div>
);

export const withWidth = () => <>{example}</>;

withWidth.story = {
	name: 'with width',
};

export const withWidthDesktop = () => <>{example}</>;

withWidthDesktop.story = {
	name: 'with width desktop',
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		layout: 'fullscreen',
	},
};

export const withWidthTablet = () => <>{example}</>;

withWidthTablet.story = {
	name: 'with width tablet',
	parameters: {
		viewport: { defaultViewport: 'tablet' },
		layout: 'fullscreen',
	},
};
