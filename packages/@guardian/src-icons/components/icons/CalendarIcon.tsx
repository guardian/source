import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const CalendarIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.63647 2H7.45466V5.63636H5.63647V2ZM16.5454 2H18.3636V5.63636H16.5454V2ZM20.5973 3L22 4.42162L22 20.5875L20.5973 21.9772L3.4027 22L2 20.5875V4.42168L3.4027 3H4.72727V6.54548H8.36364V3H15.6364V6.54548H19.2727V3H20.5973ZM3.81812 9.27271H20.1818V20.1818H3.81812V9.27271ZM10.1819 13.3091L11.5273 13.1364V17.9091H13.0092V11.5455H12.1819L10.1819 12.3727V13.3091Z"
			/>
		</svg>
	);
};
