import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const ChevronUpDoubleIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 11.2587L11.4987 1.75999H12.5013L22 11.2587L21.0226 12.2111L12 4.8427L2.97744 12.2111L2 11.2587ZM2 21.2838L11.4987 11.7851H12.5013L22 21.2838L21.0226 22.2362L12 14.8678L2.97744 22.2362L2 21.2838Z"
			/>
		</svg>
	);
};
