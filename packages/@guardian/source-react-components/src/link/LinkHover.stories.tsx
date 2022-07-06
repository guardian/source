import { css } from '@emotion/react';
import { textSans, titlepiece } from '@guardian/source-foundations';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { Link } from './Link';
import type { LinkProps } from './Link';

export default {
	title: 'Packages/source-react-components/LinkHover',
	component: Link,
	args: {
		priority: 'primary',
		href: '#',
	},
};

const Template: Story = (args: LinkProps) => {
	const { cssOverrides, ...rest } = args;
	const props = rest as LinkProps;

	if (cssOverrides) {
		props.cssOverrides = cssOverrides;
	}
	return <Link {...args}>Return to home page</Link>;
};

// *****************************************************************************

export const TitlePieceLarge = Template.bind({});
TitlePieceLarge.args = {
	cssOverrides: css`
		${titlepiece.large()}
	`,
};
asChromaticStory(TitlePieceLarge);

// *****************************************************************************

export const TitlePieceMedium = Template.bind({});
TitlePieceMedium.args = {
	cssOverrides: css`
		${titlepiece.medium()}
	`,
};
asChromaticStory(TitlePieceMedium);

// *****************************************************************************

export const TitlePieceSmall = Template.bind({});
TitlePieceSmall.args = {
	cssOverrides: css`
		${titlepiece.small()}
	`,
};
asChromaticStory(TitlePieceSmall);

// *****************************************************************************

export const TextSansXLarge = Template.bind({});
TextSansXLarge.args = {
	cssOverrides: css`
		${textSans.xlarge()}
	`,
};
asChromaticStory(TextSansXLarge);

// *****************************************************************************

export const TextSansLarge = Template.bind({});
TextSansLarge.args = {
	cssOverrides: css`
		${textSans.large()}
	`,
};
asChromaticStory(TextSansLarge);

// *****************************************************************************

export const TextSansMedium = Template.bind({});
TextSansMedium.args = {
	cssOverrides: css`
		${textSans.medium()}
	`,
};
asChromaticStory(TextSansMedium);

// *****************************************************************************

export const TextSansSmall = Template.bind({});
TextSansSmall.args = {
	cssOverrides: css`
		${textSans.small()}
	`,
};
asChromaticStory(TextSansSmall);

// *****************************************************************************

export const TextSansXSmall = Template.bind({});
TextSansXSmall.args = {
	cssOverrides: css`
		${textSans.xsmall()}
	`,
};
asChromaticStory(TextSansXSmall);

// *****************************************************************************

export const TextSansXXSmall = Template.bind({});
TextSansXXSmall.args = {
	cssOverrides: css`
		${textSans.xxsmall()}
	`,
};
asChromaticStory(TextSansXXSmall);
