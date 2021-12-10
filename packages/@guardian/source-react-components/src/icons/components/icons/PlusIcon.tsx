import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const PlusIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.8 13.2L11.225 22.9999H12.75L13.2 13.2L22.9999 12.75V11.225L13.2 10.8L12.75 1H11.225L10.8 10.8L1 11.225V12.75L10.8 13.2Z"
			/>
		</svg>
	);
};
