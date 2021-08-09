import { ThemeProvider } from '@emotion/react';
import * as themes from '@guardian/src-foundations/themes';
import type { Args, Story } from '@storybook/react';
import { dedent } from 'ts-dedent';
import { Label, LabelProps } from './Label';

export default {
	title: 'Source/src-label/Label',
	component: Label,
};

export const Demo = (args: LabelProps) => (
	<Label {...args}>
		<span role="img" aria-label="Hello!">
			👋
		</span>
	</Label>
);

Demo.args = {
	text: 'Hello world',
	supporting: 'Here I am',
	optional: false,
	hideLabel: false,
};

// This is intended to make it easier to update multiple stories at once.
// I couldn't decide whether it was better use a story factory or just
// have lots of stories.
//
// If you're reading this in the future and wish it was just a load of
// separate stories, you might be right. Feel free to change it.

const getStories = (
	themeName: 'labelDefault' | 'labelBrand',
	background?: string,
) => {
	const baseArgs = {
		theme: themes[themeName],
		text: 'Email',
		children: <p>child content</p>,
	};

	const baseParameters = {
		controls: { disabled: true },
		backgrounds: { default: background },
	};

	const getDemoCode = ({ theme, children, ...props }: Args) => {
		const codeProps = Object.entries(props)
			.map(([k, v]) => `${k}="${v}"`)
			.join(' ');
		return dedent`
			import { ThemeProvider } from '@emotion/react';
			import { ${themeName} } from '@guardian/src-foundations/themes';
			import { Label } from '@guardian/src-label';

			<ThemeProvider theme={${themeName}}>
			  <Label ${codeProps}>
			    <p>child content</p>
			  </Label>
			</ThemeProvider>`;
	};

	const story = (args?: Args) => {
		const story: Story = ({ theme, text, ...args }) => (
			<ThemeProvider theme={theme}>
				<Label text={text} {...args} />
			</ThemeProvider>
		);
		story.args = { ...baseArgs, ...args };
		story.parameters = {
			...baseParameters,
			docs: {
				source: {
					code: getDemoCode({ ...story.args }),
				},
			},
		};
		return story;
	};

	return [
		story(),
		story({
			supporting: 'alex@example.com',
		}),
		story({
			optional: true,
		}),
		story({
			hideLabel: true,
		}),
	];
};

export const [
	DefaultTheme,
	DefaultThemeWithSupportingText,
	DefaultThemeWithOptional,
	DefaultThemeWithHiddenLabel,
] = getStories('labelDefault');

export const [
	BrandTheme,
	BrandThemeWithSupportingText,
	BrandThemeWithOptional,
	BrandThemeWithHiddenLabel,
] = getStories('labelBrand', 'brandBackground.primary');
