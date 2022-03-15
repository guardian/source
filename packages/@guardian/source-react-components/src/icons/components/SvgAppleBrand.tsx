import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

// The viewBox is changed from "6 6 44 44" to "15 15 26 26" for a ~60% zoom
export const SvgAppleBrand = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="15 15 26 26"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="nonzero"
					fill="black"
					d="M28.22 20.38c.83 0 1.88-.58 2.5-1.35.56-.7.97-1.68.97-2.66 0-.13-.01-.26-.03-.37-.93.04-2.04.64-2.71 1.45-.53.62-1 1.58-1 2.57 0 .15.01.3.03.34l.24.02zM25.3 35c1.14 0 1.64-.79 3.06-.79 1.44 0 1.76.77 3.02.77 1.25 0 2.08-1.19 2.86-2.35.88-1.33 1.25-2.63 1.27-2.7a4.16 4.16 0 01-2.46-3.83c0-2.44 1.87-3.54 1.98-3.63a4.28 4.28 0 00-3.65-1.88c-1.39 0-2.53.87-3.24.87-.77 0-1.8-.82-3-.82-2.3 0-4.63 1.96-4.63 5.65 0 2.3.87 4.72 1.93 6.3.92 1.32 1.71 2.41 2.86 2.41z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Apple logo
				</span>
			) : (
				''
			)}
		</>
	);
};
