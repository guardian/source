import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowLeftStraightIcon = ({
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
				d="M23 11.0445H4.72639L11.8925 2.46907L10.9609 1.53747L1 11.5223V12.4778L10.9609 22.4626L11.8925 21.531L4.72639 12.9555H23V11.0445Z"
			/>
		</svg>
	);
};
