import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const HouseCrossIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.2999 8.34998L17.9999 6.04999L15.7 8.34998L14.65 7.29998L16.9499 4.99999L14.65 2.7L15.7 1.65L17.9999 3.94999L20.2999 1.65L21.3499 2.7L19.0499 4.99999L21.3499 7.29998L20.2999 8.34998ZM12 4.97499C12 8.27498 14.725 11 17.9999 11V19.9999L16.9999 20.9999H12.5V14.5H7.49998V20.9999H3L2 19.9999V9.37498L9.39997 2H10.4L12.125 3.69999C12.05 4.09999 12 4.54999 12 4.97499Z"
			/>
		</svg>
	);
};
