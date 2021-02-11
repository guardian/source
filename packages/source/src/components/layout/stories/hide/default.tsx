import React from 'react';
import { Container, Hide } from '../../index';
import { css } from '@emotion/react';
import { sport } from '../../../../foundations/src/palette';
import { textSans } from '../../../../foundations/src/typography';

const contents = css`
	${textSans.medium()};
	text-align: center;
	background-color: ${sport[600]};
`;

export const below = () => (
	<Container>
		<Hide below="desktop">
			<div css={contents}>Will not appear below desktop</div>
		</Hide>
	</Container>
);

below.story = {
	name: 'below',
};

export const above = () => (
	<Container>
		<Hide above="desktop">
			<div css={contents}>Will not appear at desktop or above</div>
		</Hide>
	</Container>
);

above.story = {
	name: 'above',
};
