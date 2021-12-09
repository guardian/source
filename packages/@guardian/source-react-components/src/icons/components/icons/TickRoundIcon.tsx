import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const TickRoundIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2273 14.1468L7.95659 11.9776L7.15769 12.7765L9.86602 16.5682H10.3196L17.7752 8.8519L16.9546 8.05179L10.2273 14.1468Z"
			/>
		</svg>
	);
};
