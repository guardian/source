import React from 'react';
import { Columns } from './index';

const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: '0 -8px' }}>{storyFn()}</div>;
};

export default {
	title: 'Columns',
	component: Columns,
	decorators: [gridStoryWrapper],
};

export * from './stories/columns/default';
export * from './stories/columns/collapse-below';
export * from './stories/columns/responsive';
export * from './stories/columns/with-container';
export * from './stories/columns/with-width';
