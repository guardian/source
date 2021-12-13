import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const PersonRoundIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.2364 18.7183C16.6005 20.2376 14.4087 21.1667 12 21.1667C9.59012 21.1667 7.39744 20.2367 5.76124 18.7161L6.94937 14.0692L7.6863 13.3102C9.12421 12.8104 10.4183 12.5882 12 12.5882C13.5638 12.5882 14.8758 12.8474 16.3138 13.3102L17.0327 14.0692L18.2364 18.7183ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.9908 11.4118C13.3454 11.4118 14.9413 9.70934 14.9413 7.63322C14.9413 5.55709 13.8464 4.35294 11.9908 4.35294C10.1352 4.35294 9.0589 5.55709 9.0589 7.63322C9.0589 9.70934 10.7846 11.4118 11.9908 11.4118Z"
			/>
		</svg>
	);
};
