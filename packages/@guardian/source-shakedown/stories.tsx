import * as label from '@guardian/src-label';
import type * as Label from '@guardian/src-label';

console.log(Label);

export default {
	title: 'Source Shakedown/source-shakedown',
};

// can't find a way to get the possible props without doing storybook-style file analysis
// which is hard in a package
const LabelDemo = () =>
	Object.entries(label).map(([componentName, Component], i) => {
		console.log(Component, componentName);
		return typeof Component === 'function' ? (
			<div style={{ paddingBottom: '1rem' }}>
				<code>
					{`import { ${componentName} } from '@guardian/src-label'`};
				</code>
				<Component key={i} text="Lorem ipsum dolor sit amet">
					<span>child component</span>
				</Component>
			</div>
		) : null;
	});

export { LabelDemo };
