import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgChevronDownSingle = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 9.95L14.45 20.4H15.45L25.8999 9.95L24.9249 9L14.95 17.4L4.975 9L4 9.95Z"
			/>
		</svg>
	);
};
