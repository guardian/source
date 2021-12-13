import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ChevronRightSingleIcon = ({
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
				d="M7.23169 1L6.25 1.95652L14.6321 12L6.25 22.0435L7.23169 23L17.7031 12.5286V11.4714L7.23169 1Z"
			/>
		</svg>
	);
};
