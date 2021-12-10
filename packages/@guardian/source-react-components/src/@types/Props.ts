import type { SerializedStyles } from '@emotion/react';

export interface Props {
	className?: string;
	/**
	 * Override component styles by passing in the result of [emotion's `css` function/prop](https://emotion.sh/docs/introduction).
	 */
	cssOverrides?: SerializedStyles | SerializedStyles[];
}
