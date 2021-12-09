import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const CrosswordsTwoSquaresSlashIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.85 20.25L19.7499 2.32501L21.1749 3.75001L3.24999 21.6749L1.85 20.25ZM1 6L1.475 5.5H14L12 7.47499V7H2.49999V17L1.225 18.25L1 18V6ZM21.9999 5.5H22.9999V7H20.4999L21.9999 5.5ZM4.52499 7.92499H4.97499V11.225H5.59998V11.75H3.54999V11.225H4.19999V8.79999L3.49999 8.87499V8.42499L4.52499 7.92499ZM13.5 14V17H22.9999V18.5H8.97497L10.5 17H12V15.5L13.5 14Z"
			/>
		</svg>
	);
};
