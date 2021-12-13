import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgHouse = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
			viewBox="0 0 30 30"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22 25l1-1V13.375L15.6 6h-1.2L7 13.375V24l1 1h4.5v-6.5h5V25H22z"
			/>
		</svg>
	);
};
