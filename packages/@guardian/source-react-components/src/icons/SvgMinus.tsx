import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgMinus = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M4 14v2.5h22V14H4z" />
	</svg>
);
