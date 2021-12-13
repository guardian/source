import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const BookMarkIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.125 3H7.875L6.5 4.38889L6.5 22.537L6.95833 23L12 19.9907L17.0417 23L17.5 22.537V4.38889L16.125 3Z"
			/>
		</svg>
	);
};
