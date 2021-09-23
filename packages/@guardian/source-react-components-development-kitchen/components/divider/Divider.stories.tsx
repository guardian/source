import { css } from '@emotion/react';
import { Divider } from './Divider';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Divider',
	component: Divider,
};

export const Defaults = () => (
	<span>
		<h2>The default divider</h2>
		<p>Some text</p>
		<Divider />
		<p>Some text</p>
	</span>
);
Defaults.story = {
	name: 'with defaults',
};

export const Tight = () => (
	<span>
		<h2>When tight</h2>
		<p>Some text</p>
		<Divider spaceAbove="tight" />
		<p>Some text</p>
	</span>
);
Tight.story = {
	name: 'with less space above',
};

export const Full = () => (
	<span>
		<h2>With size full</h2>
		<p>Some text</p>
		<Divider size="full" />
		<p>Some text</p>
	</span>
);
Full.story = {
	name: 'with size set to full',
};

export const FullText = () => (
	<span>
		<h2>With text and size full</h2>
		<p>Some text</p>
		<Divider displayText="I am centered" size="full" />
		<p>Some text</p>
	</span>
);
FullText.story = {
	name: 'with text and size full',
};

export const PartialText = () => (
	<span>
		<h2>With text and size partial</h2>
		<p>Some text</p>
		<Divider displayText="I am centered" size="partial" />
		<p>Some text</p>
	</span>
);
PartialText.story = {
	name: 'with text and size partial',
};
