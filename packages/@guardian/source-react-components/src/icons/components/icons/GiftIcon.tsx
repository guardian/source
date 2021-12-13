import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const GiftIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path d="M5.91064 3.76316L8.20976 1L11.9896 5.49791L15.7694 1L18.0685 3.76316L14.1879 5.97367L19.5 5.97368L20.5 7.07894V12.7158H13.1V6.52632H10.9V12.7158L3.5 12.7158V7.07895L4.5 5.97371L9.79135 5.97368L5.91064 3.76316Z" />
			<path d="M10.9 15H4V20.8039L5.19217 22H10.9V15Z" />
			<path d="M20 15H13.1V22H18.6211L20 20.7869V15Z" />
		</svg>
	);
};
