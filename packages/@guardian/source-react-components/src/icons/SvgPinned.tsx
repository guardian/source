import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgPinned = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.3236 13.9904C17.5861 12.4521 16.3006 11.2088 14.7202 10.5345L14.1301 3.66475C15.1838 3.32759 16.111 2.75862 16.8907 2H14.0037H9.99985H7.11288C7.8715 2.75862 8.81978 3.32759 9.87342 3.66475L9.30445 10.5345C7.70292 11.2088 6.41748 12.4521 5.67993 13.9904H9.00943H11.0113V19.9962L12.0018 24L12.9922 19.9962V13.9904H14.9941H18.3236Z"
		/>
	</svg>
);
