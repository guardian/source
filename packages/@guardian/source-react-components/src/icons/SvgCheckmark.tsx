import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgCheckmark = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6 14.775l-1 1 5 7h.475l14.3-14.8-1-.975-13.3 12.05L6 14.775z"
		/>
	</svg>
);