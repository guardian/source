import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgArrowLeftStraight = ({
	size,
}: IconProps): EmotionJSX.Element => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.9 13.95l7.5-8.975L13.425 4 3 14.45v1L13.425 25.9l.975-.975-7.5-8.975h19.125v-2H6.9z"
		/>
	</svg>
);