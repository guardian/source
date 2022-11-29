import type { Theme as EmotionTheme } from '@emotion/react';
import { palette } from '@guardian/source-foundations';

export const expandingWrapperThemeDefault = {
	expander: {
		border: palette.neutral[86],
		expandBackground: palette.neutral[7],
		expandText: palette.neutral[100],
		collapseBackground: palette.neutral[100],
		collapseText: palette.neutral[7],
	},
};
export const expandingWrapperDarkTheme = {
	expander: {
		border: palette.neutral[60],
		expandBackground: palette.neutral[86],
		expandText: palette.neutral[7],
		collapseBackground: palette.neutral[10],
		collapseText: palette.neutral[86],
	},
};

export interface Theme extends EmotionTheme {
	expander?: typeof expandingWrapperThemeDefault.expander;
}
