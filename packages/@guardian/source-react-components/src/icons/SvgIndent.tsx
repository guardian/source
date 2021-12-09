import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgIndent = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.02499 14.5V10H6V15.45L7.025 16.475H20.7499L18 20.05L18.85 20.95L23.9999 15.825V15.15L18.9 10.025L18 10.9L20.7499 14.5H8.02499Z"
			/>
		</svg>
	);
};
