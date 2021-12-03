import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const MinusIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 10.75V13.25H22.9999V10.75H1Z"
			/>
		</svg>
	);
};
