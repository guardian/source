import { Tiles } from './index';

const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: '0 -8px' }}>{storyFn()}</div>;
};

export default {
	title: 'Tiles',
	component: Tiles,
	decorators: [gridStoryWrapper],
};

export * from './stories/tiles/default';
export * from './stories/tiles/collapse-below';
