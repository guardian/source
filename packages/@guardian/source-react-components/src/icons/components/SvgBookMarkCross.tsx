import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgBookMarkCross = ({
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
					d="M15.324 6.77686L14.2659 5.69357L16.5836 3.37583L14.2911 1.08329L15.324 0.0251928L17.6165 2.34293L19.9594 0L21.0427 1.0581L18.6998 3.40102L21.0427 5.74395L19.9846 6.77686L17.6417 4.45912L15.324 6.77686ZM17.5 8.625V22.537L17.0417 23L12 20.6897L6.95833 23L6.5 22.537V4.38889L7.875 3H12C12 6.05556 14.475 8.625 17.5 8.625Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Remove, Bookmark,
				</span>
			) : (
				''
			)}
		</>
	);
};
