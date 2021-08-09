import { SerializedStyles } from '@emotion/react';

export type ThemeName = 'default' | 'brand' | 'brandAlt';

export interface Props {
	className?: string;
	/**
	 * The result of using [emotion `css` function/prop](https://emotion.sh/docs/introduction) (or array of them).
	 */
	cssOverrides?: SerializedStyles | SerializedStyles[];
}
