import { css } from '@emotion/react';
import { Divider } from '../index';

const TenPixelPadding = css`
	/* Use ten pixels to simulate an article body */
	padding: 10px;
`;

export const Defaults = () => (
	<div css={TenPixelPadding}>
		<h2>The default divider</h2>
		<p>Some text</p>
		<Divider />
		<p>Some text</p>
	</div>
);
Defaults.story = {
	name: 'with defaults',
};

export const Tight = () => (
	<div css={TenPixelPadding}>
		<h2>When tight</h2>
		<p>Some text</p>
		<Divider spaceAbove="tight" />
		<p>Some text</p>
	</div>
);
Tight.story = {
	name: 'with less space above',
};

export const Full = () => (
	<div css={TenPixelPadding}>
		<h2>With size full</h2>
		<p>Some text</p>
		<Divider size="full" />
		<p>Some text</p>
	</div>
);
Full.story = {
	name: 'with size set to full',
};

export const FullText = () => (
	<div css={TenPixelPadding}>
		<h2>With text and size full</h2>
		<p>Some text</p>
		<Divider displayText="I am centered" size="full" />
		<p>Some text</p>
	</div>
);
FullText.story = {
	name: 'with text and size full',
};

export const PartialText = () => (
	<div css={TenPixelPadding}>
		<h2>With text and size partial</h2>
		<p>Some text</p>
		<Divider displayText="I am centered" size="partial" />
		<p>Some text</p>
	</div>
);
PartialText.story = {
	name: 'with text and size partial',
};
