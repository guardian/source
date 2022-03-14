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
				viewBox="0 0 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M25.9999 8.09999C25.1249 8.47499 24.3499 8.69999 23.3749 8.82499C24.3999 8.24999 25.0749 7.4 25.3999 6.325C24.5249 6.75 23.4999 7.325 22.5249 7.4C21.6999 6.575 20.5999 6 19.1999 6C16.75 6 14.7 8.04999 14.7 10.5C14.7 10.775 14.725 11.25 14.825 11.525C11 11.325 7.87499 9.57499 5.49999 6.8C5.175 7.47499 4.9 8.27499 4.9 9.07499C4.9 10.575 5.69999 12.1 6.92499 12.825C6.52499 12.9 5.25 12.5 4.85 12.3C4.85 14.625 6.47499 16.3 8.49998 16.775C7.72499 16.975 7.12499 17.025 6.44999 16.85C7.07499 18.65 8.64998 19.95 10.65 19.95C9.14998 21.2249 7.17499 21.8999 5.075 21.9249C4.7 21.8499 4.3 21.9249 4 21.8499C5.92499 23.1249 8.42498 23.8249 10.925 23.8249C19.1999 23.8249 23.7749 16.975 23.7749 11.025C23.7749 10.85 23.7249 10.625 23.7249 10.45C24.6249 9.77499 25.3999 8.97499 25.9999 8.09999Z"
				/>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Twitter logo
				</span>
			) : (
				''
			)}
		</>
	);
};
