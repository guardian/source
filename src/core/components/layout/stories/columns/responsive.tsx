import React from 'react';
import { Columns, Column, Container } from '../../index';
import { sport } from '@guardian/src-foundations/palette';
import { css } from '@emotion/react';

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`;

export const responsive = () => (
	<Container>
		<Columns>
			<Column width={[1 / 2, 1 / 4]}>
				<div css={contents}>50% at mobile, 25% above tablet</div>
			</Column>
			<Column width={[1 / 2, 3 / 4]}>
				<div css={contents}>50% width at mobile, 75% above tablet</div>
			</Column>
		</Columns>
	</Container>
);

responsive.story = {
	name: 'responsive columns',
	parameters: {
		viewport: { defaultViewport: 'tablet' },
	},
};

export const responsivelyHide = () => (
	<Container>
		<Columns>
			<Column width={[0, 1 / 4]}>
				<div css={contents}>
					Not visible at mobile, 25% above tablet
				</div>
			</Column>
			<Column width={[1, 3 / 4]}>
				<div css={contents}>100% at mobile, 75% above tablet</div>
			</Column>
		</Columns>
	</Container>
);

responsivelyHide.story = {
	name: 'responsively hide columns',
	parameters: {
		viewport: { defaultViewport: 'tablet' },
	},
};
