import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ChevronDownDoubleIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 2.71238L2.97744 1.75999L12 9.12842L21.0226 1.75999L22 2.71238L12.5013 12.2111H11.4987L2 2.71238ZM2 12.7374L2.97744 11.7851L12 19.1535L21.0226 11.7851L22 12.7374L12.5013 22.2362H11.4987L2 12.7374Z"
			/>
		</svg>
	);
};
