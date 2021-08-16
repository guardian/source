import { SerializedStyles } from '@emotion/react';

export type ThemeName = 'default' | 'brand' | 'brandAlt';

export interface Props {
	className?: string;
	/**
	 * `SerializedStyles` (or an array of them) are the result of using [emotion's `css` function/prop](https://emotion.sh/docs/introduction).
	 */
	cssOverrides?: SerializedStyles | SerializedStyles[];
}
