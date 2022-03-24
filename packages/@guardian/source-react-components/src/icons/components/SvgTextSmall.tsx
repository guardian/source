import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgTextSmall = ({
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
					d="M13.345 17.69L14.82 17.365L13.82 14.265H9.49498L8.44499 17.365L9.96998 17.69V18.465H5.87V17.69L7.16999 17.365L11.295 5.54001H12.845L16.845 17.365L18.12 17.69V18.465H13.345V17.69ZM9.81998 13.315H13.52L11.77 7.865H11.67L9.81998 13.315Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Small text
				</span>
			) : (
				''
			)}
		</>
	);
};
