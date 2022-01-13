import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgPlay = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24.1749 15.15V14.45L8.575 8L8 8.45V21.15L8.575 21.55L24.1749 15.15Z"
			/>
		</svg>
	);
};
