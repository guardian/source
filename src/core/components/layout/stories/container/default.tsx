import React from 'react';
import { css } from '@emotion/react';
import { Container } from '../../index';
import { textSans } from '@guardian/src-foundations/typography';
import { sport, neutral } from '@guardian/src-foundations/palette';

const Contents = ({ background = 'transparent' }: { background?: string }) => {
	return (
		<p
			css={css`
				${textSans.medium()};
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: ${background};
				margin: 0;
				height: 300px;
			`}
		>
			Container contents
		</p>
	);
};

export const withDefaults = () => (
	<Container>
		<Contents background={neutral[86]} />
	</Container>
);
withDefaults.story = {
	name: 'with defaults',
};

export const withSideBorders = () => (
	<Container sideBorders={true}>
		<Contents background={neutral[86]} />
	</Container>
);
withSideBorders.story = {
	name: 'with side borders',
};

export const withTopBorder = () => (
	<Container sideBorders={true} topBorder={true}>
		<Contents background={neutral[86]} />
	</Container>
);
withTopBorder.story = {
	name: 'with top border',
};

export const withBackground = () => (
	<Container backgroundColor={sport[600]}>
		<Contents />
	</Container>
);
withBackground.story = {
	name: 'with background',
};

export const withBorderColor = () => (
	<Container sideBorders={true} borderColor="black">
		<Contents />
	</Container>
);
withBorderColor.story = {
	name: 'with border colour',
};
