import { ThemeProvider } from '@emotion/react';
import * as themes from '@guardian/source-foundations';
import { dedent } from 'ts-dedent';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import type {
	Args,
	Story,
} from '../../../../../../lib/@types/storybook-emotion-10-fixes';
import type { LabelProps } from './Label';
import { Label } from './Label';

export default {
	title: 'Source/src-label/Label',
	component: Label,
};

export const Demo = (args: LabelProps) => (
	<Label {...args}>
		<input type="text" />
	</Label>
);

Demo.args = {
	text: 'Hello world',
	supporting: 'Who are you?',
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
		children: <input type="email" />,
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
			    <input type="email" />
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
