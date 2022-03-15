import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgCrosswords = ({
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
					d="M20.9999 20.4999L20.4999 20.9999H3.5L3 20.4999V3.5L3.5 3H20.4999L20.9999 3.5V20.4999ZM11.5 4.49999H4.49999V11.5H11.5V4.49999ZM19.4999 11.5V4.49999H12.5V11.5H19.4999ZM5.22499 8.04998V7.64998H5.72499V5.82499L5.19999 5.89999V5.54999L5.97499 5.19999H6.27499V7.64998H6.77499V8.04998H5.22499ZM11.5 12.5H4.49999V19.4999H11.5V12.5Z"
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
