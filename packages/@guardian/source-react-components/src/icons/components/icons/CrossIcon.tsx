import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const CrossIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.015 14.042L20.7068 22L22 20.7087L14.0602 12L22 3.29129L20.7068 2L12.015 9.95796L3.29323 2.03003L2 3.32132L9.96992 12L2 20.6787L3.29323 21.97L12.015 14.042Z"
			/>
		</svg>
	);
};
