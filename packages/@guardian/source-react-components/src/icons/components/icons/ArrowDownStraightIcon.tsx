import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowDownStraightIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.0445 1L11.0445 19.2736L2.46904 12.1075L1.53745 13.0391L11.5222 23L12.4777 23L22.4625 13.0391L21.5309 12.1075L12.9555 19.2736L12.9555 1L11.0445 1Z"
			/>
		</svg>
	);
};
