import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgStarOutline = ({
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
					d="M14.3813 13.1959L18.2436 10.3593H13.4857L12.0074 5.81203L10.5452 10.3593H5.75638L9.61086 13.1902L8.17276 17.6783L12 14.8791L15.8561 17.6994L14.3813 13.1959ZM19.1513 21.3357L18.2931 21.9598L12 17.3569L5.70686 21.9598L4.90071 21.3357L7.26714 13.9503L1 9.34749L1.31206 8.35931H9.08747L11.4539 0.999969H12.5461L14.9385 8.35931H22.6879L23 9.34749L16.7329 13.9503L19.1513 21.3357Z"
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
