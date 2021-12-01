import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const MagnifyingGlassIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.27273 2C13.2955 2 16.5227 5.29545 16.5227 9.27273C16.5227 13.2955 13.2955 16.5227 9.27273 16.5227C5.25 16.5227 2 13.2955 2 9.27273C2 5.29545 5.25 2 9.27273 2ZM9.2727 3.84091C6.24997 3.84091 3.84088 6.25 3.84088 9.27273C3.84088 12.2727 6.24997 14.7273 9.2727 14.7273C12.2727 14.7273 14.7272 12.2727 14.7272 9.27273C14.7272 6.25 12.2727 3.84091 9.2727 3.84091ZM16.5682 14.7273L22 20.1591L20.1591 22L14.7273 16.5682V15.6364L15.6364 14.7273H16.5682Z"
			/>
		</svg>
	);
};
