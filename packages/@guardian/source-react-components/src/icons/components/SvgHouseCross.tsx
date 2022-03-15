import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgHouseCross = ({
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
					d="M20.2999 8.34997L17.9999 6.04998L15.7 8.34997L14.65 7.29997L16.9499 4.99998L14.65 2.69999L15.7 1.64999L17.9999 3.94999L20.2999 1.64999L21.3499 2.69999L19.0499 4.99998L21.3499 7.29997L20.2999 8.34997ZM12 4.97498C12 8.27497 14.725 11 17.9999 11V19.9999L16.9999 20.9999H12.5V14.4999H7.49998V20.9999H3L2 19.9999V9.37497L9.39997 1.99999H10.4L12.125 3.69999C12.05 4.09999 12 4.54998 12 4.97498Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Home, remove,
				</span>
			) : (
				''
			)}
		</>
	);
};
