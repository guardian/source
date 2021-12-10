import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const IndentIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.02499 11.5V7H3V12.45L4.025 13.475H17.7499L15 17.05L15.85 17.95L20.9999 12.825V12.15L15.9 7.025L15 7.9L17.7499 11.5H5.02499Z"
			/>
		</svg>
	);
};