import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgSpeechBubble = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.9999 10.5L22.4999 9H7.49999L6 10.5V19.5L7.475 21H9.99999V25.9999H10.975L14 21H22.4999L23.9999 19.5V10.5Z"
			/>
		</svg>
	);
};
