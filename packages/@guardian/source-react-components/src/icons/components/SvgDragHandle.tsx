import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgDragHandle = ({
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
					d="M7 4.99999H8.99999V3H7V4.99999ZM15 4.99999H17V3H15V4.99999ZM7 8.99998H8.99999V6.99999H7V8.99998ZM15 8.99998H17V6.99999H15V8.99998ZM7 13H8.99999V11H7V13ZM15 13H17V11H15V13ZM7 17H8.99999V15H7V17ZM15 17H17V15H15V17ZM7 20.9999H8.99999V18.9999H7V20.9999ZM15 20.9999H17V18.9999H15V20.9999Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Dots
				</span>
			) : (
				''
			)}
		</>
	);
};
