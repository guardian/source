import { SerializedStyles } from '@emotion/react';

export type ThemeName = 'default' | 'brand' | 'brandAlt';

export interface Props {
	className?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}
