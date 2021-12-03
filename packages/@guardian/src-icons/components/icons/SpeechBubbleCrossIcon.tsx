import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SpeechBubbleCrossIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.2999 9.69998L19.9999 7.39998L17.6999 9.69998L16.65 8.64998L18.9499 6.34999L16.65 4.05L17.6999 3L19.9999 5.29999L22.2999 3L23.3499 4.05L21.0499 6.34999L23.3499 8.64998L22.2999 9.69998ZM14 6.34999C14 9.64998 16.7 12.35 19.9999 12.35V15.85L18.4999 17.35H9.99997L6.97498 22.3499H5.99999V17.35H3.475L2 15.85V6.84999L3.49999 5.34999H14.075C14.025 5.67499 14 6.02499 14 6.34999Z"
			/>
		</svg>
	);
};
