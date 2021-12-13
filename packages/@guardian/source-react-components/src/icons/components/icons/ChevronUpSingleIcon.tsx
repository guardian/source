import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ChevronUpSingleIcon = ({
	size,
}: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 16.7677L12.5023 6.27H11.4977L1 16.7677L1.97945 17.7221L12 9.2837L22.0205 17.7221L23 16.7677Z"
			/>
		</svg>
	);
};
