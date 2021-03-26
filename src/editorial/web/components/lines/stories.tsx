import { css } from '@emotion/react';
import React from 'react';
import { Lines } from './index';

export default {
	title: 'Lines',
	component: Lines,
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			width: 220px;
			padding: 20px;
		`}
	>
		{children}
	</div>
);

export const straightLines = () => (
	<Container>
		<h2>Straight Lines</h2>
		<h3>1</h3>
		<Lines count={1} />
		<h3>4 (default)</h3>
		<Lines />
		<h3>8</h3>
		<Lines count={8} />
	</Container>
);
straightLines.story = { name: 'straight lines' };

export const dottedLines = () => (
	<Container>
		<h2>Dotted Lines</h2>
		<h3>1</h3>
		<Lines count={1} effect="dotted" />
		<h3>4 (default)</h3>
		<Lines effect="dotted" />
		<h3>8</h3>
		<Lines count={8} effect="dotted" />
	</Container>
);
dottedLines.story = { name: 'dotted lines' };

export const squigglyLines = () => (
	<Container>
		<h2>Squiggly Lines</h2>
		<h3>1</h3>
		<Lines count={1} effect="squiggly" />
		<h3>4 (default)</h3>
		<Lines effect="squiggly" />
		<h3>8</h3>
		<Lines count={8} effect="squiggly" />
	</Container>
);
squigglyLines.story = { name: 'squiggly lines' };

export const dashedLines = () => (
	<Container>
		<h2>Dashed Lines</h2>
		<h3>1</h3>
		<Lines count={1} effect="dashed" />
		<h3>4 (default)</h3>
		<Lines effect="dashed" />
		<h3>8</h3>
		<Lines count={8} effect="dashed" />
	</Container>
);
dashedLines.story = { name: 'dashed lines' };
