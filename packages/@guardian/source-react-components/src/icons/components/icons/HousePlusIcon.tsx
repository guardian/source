import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const HousePlusIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.2499 8.99997V5.74998H14V4.24999H17.2499V1H18.7499V4.24999H21.9999V5.74998H18.7499V8.99997H17.2499ZM12 4.97499C12 8.27498 14.725 11 17.9999 11V19.9999L16.9999 20.9999H12.5V14.5H7.49998V20.9999H3L2 19.9999V9.37497L9.39997 2H10.4L12.125 3.69999C12.05 4.09999 12 4.54999 12 4.97499Z"
			/>
		</svg>
	);
};
