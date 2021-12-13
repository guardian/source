import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const ArrowScrollIcon = ({ size }: IconProps): EmotionJSX.Element => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.6793 5.36035V18.6388L13.1515 15.9194L12.2695 16.8013L17.3163 21.7991H18.0022L23 16.8013L22.1425 15.9194L18.6392 18.6388V5.36035L22.1425 8.07973L23 7.19777L18.0022 2.2H17.3163L12.2695 7.19777L13.1515 8.07973L16.6793 5.36035ZM10.7996 5.13987V3.17996H1V5.13987H10.7996ZM9.8196 9.05969V7.09978H1V9.05969H9.8196ZM11.7795 12.9795V11.0196H1V12.9795H11.7795ZM8.83964 16.8993V14.9394H1V16.8993H8.83964Z"
			/>
		</svg>
	);
};
