import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const CrosswordsTickIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 3.5L3.5 3H20.4999L20.9999 3.5V12.65L15.3 17.2L13.475 15.375L12.75 16.125L14.875 19.5249H15.65L20.9999 14.125V20.4999L20.4999 20.9999H3.5L3 20.4999V3.5ZM11.5 4.49999H4.49999V11.5H11.5V4.49999ZM19.4999 11.5V4.49999H12.5V11.5H19.4999ZM5.22499 8.04998V7.64998H5.72499V5.82499L5.19999 5.89999V5.54999L5.97499 5.19999H6.27499V7.64998H6.77499V8.04998H5.22499ZM11.5 12.5H4.49999V19.4999H11.5V12.5Z"
			/>
		</svg>
	);
};
