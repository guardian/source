import { Footer } from './index';
import { css } from '@emotion/react';

const topMargin = css`
	margin-top: 3em;
`;

const footerStoryWrapper = (storyFn: () => JSX.Element) => {
	return <div css={topMargin}>{storyFn()}</div>;
};

export default {
	component: Footer,
	title: 'Footer',
	decorators: [footerStoryWrapper],
};

export * from './stories/back-to-top';
export * from './stories/default';
export * from './stories/with-children';
