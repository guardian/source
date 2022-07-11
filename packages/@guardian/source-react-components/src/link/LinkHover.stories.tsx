import { css } from '@emotion/react';
import { headline, textSans } from '@guardian/source-foundations';
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

export const HeadlineXLarge = Template.bind({});
HeadlineXLarge.args = {
	cssOverrides: css`
		${headline.xlarge()}
	`,
};
asChromaticStory(HeadlineXLarge);

// *****************************************************************************

export const HeadlineLarge = Template.bind({});
HeadlineLarge.args = {
	cssOverrides: css`
		${headline.large()}
	`,
};
asChromaticStory(HeadlineLarge);

// *****************************************************************************

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
	cssOverrides: css`
		${headline.medium()}
	`,
};
asChromaticStory(HeadlineMedium);

// *****************************************************************************

export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
	cssOverrides: css`
		${headline.small()}
	`,
};
asChromaticStory(HeadlineSmall);

// *****************************************************************************

export const HeadlineXSmall = Template.bind({});
HeadlineXSmall.args = {
	cssOverrides: css`
		${headline.xsmall()}
	`,
};
asChromaticStory(HeadlineXSmall);

// *****************************************************************************

export const HeadlineXXSmall = Template.bind({});
HeadlineXXSmall.args = {
	cssOverrides: css`
		${headline.xxsmall()}
	`,
};
asChromaticStory(HeadlineXXSmall);

// *****************************************************************************

export const HeadlineXXXSmall = Template.bind({});
HeadlineXXXSmall.args = {
	cssOverrides: css`
		${headline.xxxsmall()}
	`,
};
asChromaticStory(HeadlineXXXSmall);

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
