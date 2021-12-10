import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ChevronRightDoubleIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.71239 2L12.2111 11.4987V12.5013L2.71239 22L1.76001 21.0226L9.12843 12L1.76001 2.97744L2.71239 2ZM12.7375 2L22.2362 11.4987V12.5013L12.7375 22L11.7851 21.0226L19.1535 12L11.7851 2.97744L12.7375 2Z"
			/>
		</svg>
	);
};
