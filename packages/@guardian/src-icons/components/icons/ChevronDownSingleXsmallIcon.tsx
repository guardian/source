import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ChevronDownSingleXsmallIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.80594 10.7123L11.6347 15H12.3653L16.194 10.7123L15.5 10L11.9999 13L8.5 10L7.80594 10.7123Z"
			/>
		</svg>
	);
};
