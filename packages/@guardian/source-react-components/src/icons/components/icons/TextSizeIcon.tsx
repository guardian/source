import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const TextSizeIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.43071 14.6045L4.15852 18.5088L5.97906 18.9256V19.8687H1V18.8817L2.57926 18.5088L7.62413 4.12H9.4666L14.3799 18.5088L15.9153 18.8817V19.8687H10.1246V18.9256L11.9232 18.5088L10.651 14.6045H5.43071ZM5.78163 13.6833H10.3878L8.19439 6.94951H8.08472L5.78163 13.6833ZM21.9253 18.8817L23 19.1888V19.8687H18.8983V19.1888L20.1924 18.8817L19.3151 16.2496H15.5863V16.2935L15.016 14.78L17.1217 8.74811H18.4377L21.9253 18.8817ZM15.8933 15.46H19.0518L17.5384 10.7441H17.4726L15.8933 15.46Z"
			/>
		</svg>
	);
};