import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SpeechBubbleIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.9999 6.49999L19.4999 5H4.49999L3 6.49999V15.5L4.475 17H6.99999V21.9999H7.97498L11 17H19.4999L20.9999 15.5V6.49999Z"
			/>
		</svg>
	);
};
