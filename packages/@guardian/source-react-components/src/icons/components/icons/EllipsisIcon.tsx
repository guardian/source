import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const EllipsisIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.05051 10.2071L6.34343 9.5H2.70707L2 10.2071V13.8434L2.70707 14.5505H6.34343L7.05051 13.8434V10.2071ZM14.5252 10.2071L13.8182 9.5H10.1818L9.47474 10.2071V13.8434L10.1818 14.5505H13.8182L14.5252 13.8434V10.2071ZM22 10.2071L21.2929 9.5H17.6565L16.9495 10.2071V13.8434L17.6565 14.5505H21.2929L22 13.8434V10.2071Z"
			/>
		</svg>
	);
};