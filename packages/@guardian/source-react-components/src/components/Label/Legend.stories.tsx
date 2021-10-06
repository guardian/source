import { ThemeProvider } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { labelBrand, labelDefault } from './temporary-reexports';
import { dedent } from 'ts-dedent';
// These types are the right types, but don't work with Storybook v6 which uses Emotion v10
// import type { Args, Story } from '@storybook/react';
import type { Args, Story } from './temporary-story-reexports';
import type { LegendProps } from './Legend';
import { Legend } from './Legend';

const themes = { labelBrand, labelDefault };

export default {
	title: 'Source/src-label/Legend',
	component: Legend,
};

export const Demo = (args: LegendProps): EmotionJSX.Element => (
	<fieldset>
		<Legend {...args} />
	</fieldset>
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
			import { Legend } from '@guardian/src-label';

			<fieldset>
			  <ThemeProvider theme={${themeName}}>
			    <Legend ${codeProps} />
			  </ThemeProvider>
			<fieldset>`;
	};

	const story = (args?: Args) => {
		const story: Story = ({ theme, text, ...args }) => (
			<fieldset>
				<ThemeProvider theme={theme}>
					<Legend text={text} {...args} />
				</ThemeProvider>
			</fieldset>
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
			supporting: (
				<span role="img" aria-label="Image of a letter">
					💌
				</span>
			),
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
	DefaultThemeWithSupportingComponent,
	DefaultThemeWithOptional,
	DefaultThemeWithHiddenLabel,
] = getStories('labelDefault');

export const [
	BrandTheme,
	BrandThemeWithSupportingText,
	BrandThemeWithSupportingComponent,
	BrandThemeWithOptional,
	BrandThemeWithHiddenLabel,
] = getStories('labelBrand', 'brandBackground.primary');
