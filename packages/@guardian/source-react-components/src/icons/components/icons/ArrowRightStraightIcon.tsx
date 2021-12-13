import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowRightStraightIcon = ({
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
				d="M1 12.9555H19.2736L12.1075 21.531L13.0391 22.4626L23 12.4778V11.5223L13.0391 1.53748L12.1075 2.46907L19.2736 11.0445H1V12.9555Z"
			/>
		</svg>
	);
};
