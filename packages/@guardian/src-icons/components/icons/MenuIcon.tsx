import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const MenuIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.9999 6.99999V5H1V6.99999H22.9999ZM22.9999 13V11H1V13H22.9999ZM22.9999 19V17H1V19H22.9999Z"
			/>
		</svg>
	);
};
