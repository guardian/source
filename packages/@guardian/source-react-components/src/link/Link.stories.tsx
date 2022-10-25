import { css } from '@emotion/react';
import { headline, textSans } from '@guardian/source-foundations';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { SvgExternal } from '../../vendor/icons/SvgExternal';
import { Link } from './Link';
import type { LinkProps } from './Link';
import { linkThemeBrand, linkThemeBrandAlt } from './theme';

export default {
	title: 'Packages/source-react-components/Link',
	component: Link,
	args: {
		priority: 'primary',
		icon: <SvgExternal />,
		iconSide: 'left',
		href: '#',
	},
	argTypes: {
		icon: {
			options: ['undefined', 'SvgExternal'],
			mapping: {
				undefined: undefined,
				SvgExternal: <SvgExternal />,
			},
			control: { type: 'radio' },
		},
	},
};

const Template: Story = (args: LinkProps) => (
	<Link {...args}>Return to home page</Link>
);

const UnderlineHoverHeadlineTemplate: Story = (args: LinkProps) => {
	const headlineText = 'This is a guardian help link';

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;

				a {
					padding: 20px 0;
				}
			`}
		>
			{Object.values(headline)
				.reverse()
				.map((size, i) => (
					<Link
						key={i}
						{...args}
						cssOverrides={css`
							${size()}
						`}
					>
						{headlineText}
					</Link>
				))}
		</div>
	);
};

const UnderlineHoverTextSansTemplate: Story = (args: LinkProps) => {
	const headlineText = 'link';

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;

				a {
					padding: 20px 0;
				}
			`}
		>
			{Object.values(textSans)
				.reverse()
				.map((size, i) => (
					<div
						css={css`
							padding: 10px 0;
							${size()}
						`}
						key={i}
					>
						Some text sans, with a{' '}
						<Link
							{...args}
							cssOverrides={css`
								${size()}
							`}
						>
							{headlineText}
						</Link>{' '}
						in the middle of it
					</div>
				))}
		</div>
	);
};

export const PrimaryLinkDefaultTheme = Template.bind({});
PrimaryLinkDefaultTheme.args = {
	icon: 'undefined',
};
asChromaticStory(PrimaryLinkDefaultTheme);

// *****************************************************************************

export const PrimaryLinkBrandTheme = Template.bind({});
PrimaryLinkBrandTheme.args = {
	icon: 'undefined',
};
PrimaryLinkBrandTheme.parameters = {
	backgrounds: {
		default: 'brandBackground.primary',
	},
	theme: linkThemeBrand,
};
asChromaticStory(PrimaryLinkBrandTheme);

// *****************************************************************************

export const PrimaryLinkBrandAltTheme = Template.bind({});
PrimaryLinkBrandAltTheme.args = {
	icon: 'undefined',
};
PrimaryLinkBrandAltTheme.parameters = {
	backgrounds: {
		default: 'brandAltBackground.primary',
	},
	theme: linkThemeBrandAlt,
};
asChromaticStory(PrimaryLinkBrandAltTheme);

// *****************************************************************************

export const SecondaryLinkDefaultTheme = Template.bind({});
SecondaryLinkDefaultTheme.args = {
	priority: 'secondary',
	icon: 'undefined',
};
asChromaticStory(SecondaryLinkDefaultTheme);

// *****************************************************************************

export const PrimaryIconLinkDefaultTheme = Template.bind({});
asChromaticStory(PrimaryIconLinkDefaultTheme);

// *****************************************************************************

export const SecondaryIconLinkDefaultTheme = Template.bind({});
SecondaryIconLinkDefaultTheme.args = {
	priority: 'secondary',
};
asChromaticStory(SecondaryIconLinkDefaultTheme);

// *****************************************************************************

export const RightIconLinkDefaultTheme = Template.bind({});
RightIconLinkDefaultTheme.args = {
	iconSide: 'right',
};
asChromaticStory(RightIconLinkDefaultTheme);

// *****************************************************************************

export const UnderlineHoverHeadline = UnderlineHoverHeadlineTemplate.bind({});

UnderlineHoverHeadline.args = {
	icon: 'undefined',
};

asChromaticStory(UnderlineHoverHeadline);

// *****************************************************************************

export const UnderlineHoverTextSans = UnderlineHoverTextSansTemplate.bind({});

UnderlineHoverTextSans.args = {
	icon: 'undefined',
};

asChromaticStory(UnderlineHoverTextSans);
