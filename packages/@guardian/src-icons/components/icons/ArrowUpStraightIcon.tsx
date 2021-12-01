import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ArrowUpStraightIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.9555 23V4.72638L21.531 11.8925L22.4626 10.9609L12.4778 1H11.5223L1.53748 10.9609L2.46907 11.8925L11.0445 4.72638V23H12.9555Z"
			/>
		</svg>
	);
};
