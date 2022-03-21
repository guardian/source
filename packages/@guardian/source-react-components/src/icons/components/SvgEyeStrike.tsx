import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgEyeStrike = ({
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
					d="M14.2155 5.69755C13.4659 5.44705 12.7186 5.29877 12 5.29877C7.37437 5.29877 1.56268 11.4426 1.56268 11.4426L1.56268 12.5574C1.56268 12.5574 2.81329 13.8795 4.61597 15.2971L7.53186 12.3812C7.52181 12.2594 7.51669 12.1362 7.51669 12.0119C7.51669 9.52114 9.53299 7.52856 12 7.52856C12.1244 7.52856 12.2476 7.53362 12.3695 7.54356L14.2155 5.69755ZM9.88262 12.7142L12.002 10.5948C12.0023 10.5992 12.0025 10.6036 12.0028 10.6079L9.8861 12.7246C9.88493 12.7212 9.88377 12.7177 9.88262 12.7142ZM8.20737 14.3894L6.16617 16.4306C6.16895 16.4325 6.17172 16.4344 6.17449 16.4362L8.21279 14.3979C8.21098 14.3951 8.20917 14.3923 8.20737 14.3894ZM11.531 16.4472L9.70329 18.2749C10.4801 18.542 11.2554 18.7012 12 18.7012C16.6256 18.7012 22.4373 12.5574 22.4373 12.5574L22.4373 11.4426C22.4373 11.4426 21.1585 10.0906 19.3231 8.65512L16.4569 11.5213C16.4743 11.6823 16.4833 11.846 16.4833 12.0119C16.4833 14.4789 14.467 16.4714 12 16.4714C11.8417 16.4714 11.6852 16.4632 11.531 16.4472ZM14.3923 8.21844C14.3894 8.21664 14.3866 8.21485 14.3837 8.21306L16.0842 6.51261C16.0872 6.51421 16.0903 6.51582 16.0933 6.51743L14.3923 8.21844Z"
				></path>
				<rect
					x="20.0598"
					y="2.55106"
					width="1.8977"
					height="24.6701"
					transform="rotate(45 20.0598 2.55106)"
				></rect>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Not visible
				</span>
			) : (
				''
			)}
		</>
	);
};
