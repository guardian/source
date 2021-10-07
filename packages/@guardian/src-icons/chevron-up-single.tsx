import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from './types';

export const SvgChevronUpSingle = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.8999 19.45L15.45 9H14.45L4 19.45L4.975 20.4L14.95 12L24.9249 20.4L25.8999 19.45Z"
			/>
		</svg>
	);
};
