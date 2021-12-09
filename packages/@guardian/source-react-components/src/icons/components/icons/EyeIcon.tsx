import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const EyeIcon = ({ size }: IconProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 4.89999C16.8749 4.89999 22.9999 11.375 22.9999 11.375V12.55C22.9999 12.55 16.8749 19.0249 12 19.0249C7.12498 19.0249 1 12.55 1 12.55V11.375C1 11.375 7.12498 4.89999 12 4.89999ZM12 16.675C14.6 16.675 16.7249 14.575 16.7249 11.975C16.7249 9.34998 14.6 7.24999 12 7.24999C9.39997 7.24999 7.27498 9.34998 7.27498 11.975C7.27498 14.575 9.39997 16.675 12 16.675ZM12 10.4C12 11.25 12.7 11.975 13.575 11.975H14.35C14.35 13.275 13.3 14.325 12 14.325C10.7 14.325 9.64997 13.275 9.64997 11.975C9.64997 10.65 10.7 9.59998 12 9.59998V10.4Z"
			/>
		</svg>
	);
};
