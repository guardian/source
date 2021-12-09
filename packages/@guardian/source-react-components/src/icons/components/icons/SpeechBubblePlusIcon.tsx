import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SpeechBubblePlusIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.2499 9.99997V6.74998H16V5.24999H19.2499V2H20.7499V5.24999H23.9999V6.74998H20.7499V9.99997H19.2499ZM14 5.99999C14 9.29997 16.7 12 19.9999 12V15.5L18.4999 16.9999H9.99997L6.97498 21.9999H5.99999V16.9999H3.475L2 15.5V6.49998L3.49999 4.99999H14.075C14.025 5.32499 14 5.67499 14 5.99999Z"
			/>
		</svg>
	);
};
