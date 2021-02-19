import { css } from '@emotion/react';
import { Container } from '../../index';
import { textSans } from '@guardian/src-foundations/typography';
import { sport } from '@guardian/src-foundations/palette';

const contents = css`
	${textSans.medium()};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${sport[600]};
	margin: 0;
	height: 300px;
`;

export const defaultLight = () => (
	<Container>
		<p css={contents}>Container contents</p>
	</Container>
);

defaultLight.story = {
	name: 'default light',
};

export const withBorder = () => (
	<Container border={true}>
		<p css={contents}>Container contents</p>
	</Container>
);

withBorder.story = {
	name: 'with border',
};
