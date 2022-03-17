import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgTwitter = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="-3 -3 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23.9999 6.09999C23.1249 6.47499 22.3499 6.69999 21.3749 6.82499C22.3999 6.24999 23.0749 5.4 23.3999 4.325C22.5249 4.75 21.4999 5.325 20.5249 5.4C19.6999 4.575 18.5999 4 17.1999 4C14.75 4 12.7 6.04999 12.7 8.49998C12.7 8.77498 12.725 9.24998 12.825 9.52498C8.99998 9.32498 5.87499 7.57499 3.49999 4.8C3.175 5.47499 2.9 6.27499 2.9 7.07499C2.9 8.57498 3.69999 10.1 4.92499 10.825C4.52499 10.9 3.25 10.5 2.85 10.3C2.85 12.625 4.47499 14.3 6.49998 14.775C5.72499 14.975 5.12499 15.025 4.44999 14.85C5.07499 16.65 6.64998 17.95 8.64998 17.95C7.14998 19.2249 5.17499 19.8999 3.075 19.9249C2.7 19.8499 2.3 19.9249 2 19.8499C3.92499 21.1249 6.42498 21.8249 8.92498 21.8249C17.1999 21.8249 21.7749 14.975 21.7749 9.02498C21.7749 8.84998 21.7249 8.62498 21.7249 8.44999C22.6249 7.77499 23.3999 6.97499 23.9999 6.09999Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				></span>
			) : (
				''
			)}
		</>
	);
};
