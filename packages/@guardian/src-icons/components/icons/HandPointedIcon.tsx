import { iconSize } from '@guardian/src-foundations/size';
import type { IconProps } from '../types';

export const HandPointedIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.0013 1.72304C9.30438 1.72304 6.83219 2.67196 4.83446 4.19523L4.31006 3.67083C6.13299 1.44835 8.87987 0 12.0013 0C15.1228 0 17.8696 1.44835 19.6926 3.67083L19.1682 4.19523C17.1704 2.67196 14.6983 1.72304 12.0013 1.72304ZM19.0183 13.0102L17.52 22H10.503L9.50414 19.0284L5.28393 14.3587V13.7094L6.48257 12.4858L9.85374 14.3087L10.9775 4.02044H13.0002L13.2499 10.7628L18.4939 12.0114L19.0183 13.0102Z"
			/>
		</svg>
	);
};
