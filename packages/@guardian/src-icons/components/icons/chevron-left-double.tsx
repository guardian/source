import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const SvgChevronLeftDouble = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.275 5L15.225 5.975L7.87498 14.975L15.225 23.9749L14.275 24.9499L4.79999 15.475V14.475L14.275 5ZM24.2749 5L25.2249 5.975L17.8749 14.975L25.2249 23.9749L24.2749 24.9499L14.8 15.475V14.475L24.2749 5Z"
			/>
		</svg>
	);
};
