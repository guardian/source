import { palette } from '@guardian/source-foundations';

const isDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export const backgrounds = {
	default: 'background.matchSystemSettings',
	values: [
		{
			name: 'background.matchSystemSettings',
			value: isDark() ? palette.neutral[0] : palette.neutral[100],
		},
		{
			name: 'background.primary',
			value: palette.neutral[100],
		},
		{
			name: 'background.secondary',
			value: palette.neutral[97],
		},
		{
			name: 'background.inverse',
			value: palette.neutral[10],
		},
		{
			name: 'brandBackground.primary',
			value: palette.brand[400],
		},
		{
			name: 'brandAltBackground.primary',
			value: palette.brandAlt[400],
		},
	],
};
