import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const DownloadIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.5749 6.99998L17.4749 7.87498L12.35 13H11.65L6.54998 7.87498L7.42498 6.99998L11 9.72497V1H13V9.72497L16.5749 6.99998ZM20.9999 11L21.9999 9.99997H22.9999V19.9749L21.9749 20.9999H1.975L1 19.9749V9.99997H2L2.99999 11V18.9999H20.9999V11Z"
			/>
		</svg>
	);
};
