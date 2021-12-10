import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const QuoteIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.50566 4.70001H11.4815C10.8826 9.44548 10.3527 14.0988 10.1224 19.305H1C1.82931 14.237 3.55702 9.44548 6.50566 4.70001ZM18.0933 4.70001H23C22.4702 9.44548 21.8712 14.0988 21.6409 19.305H12.5416C13.486 14.237 15.1446 9.44548 18.0933 4.70001Z"
			/>
		</svg>
	);
};