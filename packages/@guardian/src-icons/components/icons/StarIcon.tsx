import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const StarIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.1513 21.3357L16.7329 13.9503L23 9.34749L22.6879 8.35931H14.9385L12.5461 0.999969H11.4539L9.08747 8.35931H1.31206L1 9.34749L7.26714 13.9503L4.90071 21.3357L5.70686 21.9598L12 17.3569L18.2931 21.9598L19.1513 21.3357Z"
			/>
		</svg>
	);
};
