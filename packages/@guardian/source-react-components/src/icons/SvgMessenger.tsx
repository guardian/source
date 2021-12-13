import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgMessenger = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? iconSize[size] : undefined}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.5333 23.8667C12.6333 24.2 13.8 24.3667 15 24.3667C21.0667 24.3667 26 19.8 26 14.2C26 8.56667 21.0667 4 15 4C8.93333 4 4 8.56667 4 14.2C4 17.0667 5.3 19.6667 7.36667 21.5V26L11.5333 23.8667ZM13.3333 14.7333L16.1667 17.6667L22.1667 11.3667L16.7 14.3667L13.8667 11.4333L7.86665 17.7333L13.3333 14.7333Z"
		/>
	</svg>
);
