import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgDocument = ({
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
					d="M19.9999 20.9999L19.0249 21.9999H5L4 20.9999V3L5 2H16.025L19.9999 5.99999V20.9999ZM18 7.99998H5.99999V9.49997H18V7.99998ZM18 11H5.99999V12.5H18V11ZM13 14H5.99999V15.5H13V14Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Document
				</span>
			) : (
				''
			)}
		</>
	);
};
