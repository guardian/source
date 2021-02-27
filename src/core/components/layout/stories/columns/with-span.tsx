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
				<Column span={4}>
					<div css={contents}>4</div>
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
				<Column span={12}>
					<div css={contents}>12</div>
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
				<Column span={1}>
					<div css={contents}>1</div>
				</Column>
				<Column span={1}>
					<div css={contents}>1</div>
				</Column >
				<Column span={1}>
					<div css={contents}>1</div>
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
				<Column span={2}>
					<div css={contents}>2</div>
				</Column>
			</Columns>
		</Container>
	</div>
);

export const withSpan = () => <>{example}</>;

withSpan.story = {
	name: 'with span',
};
