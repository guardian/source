import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgCrossedOutCloud = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
			viewBox="0 0 30 30"
			aria-hidden={true}
			focusable={false}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.57038 24.4288L22.6705 7.30481L21.387 6L16.5426 10.8444C15.7228 8.95713 13.9272 7.65004 11.85 7.65004C8.9265 7.65004 6.55 10.005 6.55 12.9C5.072 13.557 4 15.0795 4 16.65C4 18.4716 5.22409 20.0128 6.89282 20.4942L4.27502 23.112L5.57038 24.4288ZM11.2807 20.6693C13.0467 20.6761 14.9726 20.6765 15.5167 20.65L15.5491 20.6484H19.2491L19.25 20.65L22 20.65C24.209 20.65 26 18.859 26 16.65C26 14.441 24.209 12.65 22 12.65C21.4705 12.65 20.9395 12.7465 20.45 12.95C20.2205 12.6907 19.9639 12.4611 19.6866 12.2634L18.5938 13.3562C19.2523 13.7473 19.7731 14.3627 20 15.15C20.46 14.5365 21.2345 14.15 22 14.15C23.381 14.15 24.5 15.2695 24.5 16.65C24.5 18.0305 23.381 19.15 22 19.15H20.5V19.1487H13.1667V19.15H12.7999L11.2807 20.6693ZM15.3499 12.0371C14.9131 10.4372 13.564 9.15004 11.85 9.15004C9.749 9.15004 8.05 10.8285 8.05 12.9C8.05 13.599 8.28105 14.2233 8.51841 14.8646L8.55 14.95L7.95 15.15L7.5 14.15C6.428 14.443 5.5 15.502 5.5 16.65C5.5 18.0325 6.601 19.15 8 19.15H8.23697L15.3499 12.0371Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				No wifi
			</span>
		) : (
			''
		)}
	</>
);
