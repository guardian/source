import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgAlertRound = ({
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
					d="M22 12C22 17.5227 17.5227 22 12 22C6.47727 22 2 17.5227 2 12C2 6.47727 6.47727 2 12 2C17.5227 2 22 6.47727 22 12ZM11.2955 13.8182H12.6818L13.3409 5.18181L12.4318 4.27272H11.5455L10.6364 5.18181L11.2955 13.8182ZM13.3637 17.4546C13.3637 16.7046 12.75 16.0909 12 16.0909C11.25 16.0909 10.6364 16.7046 10.6364 17.4546C10.6364 18.2046 11.25 18.8182 12 18.8182C12.75 18.8182 13.3637 18.2046 13.3637 17.4546Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					!, Exclamation mark,
				</span>
			) : (
				''
			)}
		</>
	);
};
