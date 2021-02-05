import React from 'react';
import { Container, Columns, Column } from '../../index';
import { sport } from '@guardian/src-foundations/palette';
import { css } from '@emotion/react';

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`;

export const containerDefault = () => (
	<Container border={true}>
		<Columns>
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

containerDefault.story = {
	name: 'with container',
};
