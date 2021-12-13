import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const MediaControlsBackIcon = ({
	size,
}: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.4881 12.3834L22.4244 19.0159L23 18.5904V5.42548L22.4244 5L12.4881 11.6325L12.4881 12.3834ZM1 12.3834L10.9613 19.0159L11.5119 18.5904L11.5119 5.42548L10.9613 5L1 11.6325L1 12.3834Z"
			/>
		</svg>
	);
};
