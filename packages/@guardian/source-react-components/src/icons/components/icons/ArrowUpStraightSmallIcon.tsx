import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowUpStraightSmallIcon = ({
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
				d="M18.175 10.85L12.325 4.99998H11.625L5.80005 10.85L6.67505 11.725L10.975 8.27497V19H12.975V8.27497L17.275 11.725L18.175 10.85Z"
			/>
		</svg>
	);
};
