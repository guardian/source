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

const label = css`
	${textSans.medium()};
	text-align: left;
`;

const code = css`
	${textSans.medium()};
	margin-right: 4px;
	font-family: monospace;
	padding: 4px;
	font-size: 14px;
	background: #f7f7f7;
	border-radius: 4px;
	margin-left: 4px;
`;

const spaceOut = css`
	& > * + * {
		margin-top: ${space[5]}px !important;
	}
`;

const gridDocsUrl = 'https://theguardian.design/2a1e5182b/p/41be19-grids';
const example = (
	<div css={spaceOut}>
		<Container css={label}>
			<p>
				Elements with a <code css={code}>span</code> prop will scale at
				our <a href={gridDocsUrl}> established breakpoints</a>:
			</p>
		</Container>
		<Container>
			<Columns>
				<Column span={1}>
					<div css={contents}>1</div>
				</Column>
				<Column span={1}>
					<div css={contents}>1</div>
				</Column>
				<Column span={2}>
					<div css={contents}>2</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column span={2}>
					<div css={contents}>2</div>
				</Column>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column span={1}>
					<div css={contents}>1</div>
				</Column>
			</Columns>
		</Container>

		<Container css={label}>
			<p>
				An array of <code css={code}>span</code> values can be specified
				for relevant breakpoints:
			</p>
		</Container>
		<Container>
			<Columns>
				<Column span={4}>
					<div css={contents}>4</div>
				</Column>
				<Column span={[0, 4, 4]}>
					<div css={contents}>[0, 4]</div>
				</Column>
				<Column span={[0, 4, 4, 6, 8]}>
					<div css={contents}>[0, 0, 4, 6, 8]</div>
				</Column>
			</Columns>
		</Container>

		<Container css={label}>
			<p>
				An element with a <code css={code}>span</code> will not extend
				beyond 100% of the browser width:
			</p>
		</Container>
		<Container>
			<Columns>
				<Column span={12}>
					<div css={contents}>12</div>
				</Column>
			</Columns>
		</Container>
		<Container css={label}>
			<p>
				A <code css={code}>span</code> of 0 will cause the element not
				to be displayed.
			</p>
		</Container>
		<Container>
			<Columns>
				<Column>
					<div css={contents}>*</div>
				</Column>
				<Column span={[0, 0, 2]}>
					<div css={contents}>[0, 0, 2]</div>
				</Column>
				<Column span={[0, 0, 2]}>
					<div css={contents}>[0, 0, 2]</div>
				</Column>
			</Columns>
		</Container>

		<Container css={label}>
			<p>
				<code css={code}>span</code> is overruled by
				<code css={code}>width</code> prop:
			</p>
		</Container>

		<Container>
			<Columns>
				<Column span={2} width={3 / 4}>
					<div css={contents}>span: 2, width: 3/4</div>
				</Column>
				<Column width={1 / 4}>
					<div css={contents}>width: 1/4</div>
				</Column>
			</Columns>
		</Container>
	</div>
);

export const withSpan = () => <>{example}</>;

withSpan.story = {
	name: 'with span',
	parameters: {
		layout: 'fullscreen',
	},
};
