import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgMagnifyingGlassSadFace = ({
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
					d="M9.27273 2C10.2727 2 11.2273 2.18182 12.1136 2.56818C13 2.95455 13.75 3.47727 14.4091 4.13636C15.0682 4.79545 15.5682 5.56818 15.9545 6.45455C16.3409 7.34091 16.5227 8.27273 16.5227 9.27273C16.5227 10.2727 16.3409 11.2045 15.9545 12.0909C15.5682 12.9773 15.0682 13.75 14.4091 14.4091C13.75 15.0682 13 15.5682 12.1136 15.9545C11.2273 16.3409 10.2727 16.5227 9.27273 16.5227C8.27273 16.5227 7.34091 16.3409 6.45455 15.9545C5.56818 15.5682 4.79545 15.0682 4.13636 14.4091C3.47727 13.75 2.95455 12.9773 2.56818 12.0909C2.18182 11.2045 2 10.2727 2 9.27273C2 8.27273 2.18182 7.34091 2.56818 6.45455C2.95455 5.56818 3.47727 4.79545 4.13636 4.13636C4.79545 3.47727 5.56818 2.95455 6.45455 2.56818C7.34091 2.18182 8.27273 2 9.27273 2ZM9.2727 3.84091C8.5227 3.84091 7.81815 3.97727 7.15906 4.25C6.49997 4.54546 5.90906 4.93182 5.43179 5.40909C4.93179 5.90909 4.54543 6.47727 4.2727 7.13636C3.97725 7.79545 3.84088 8.52273 3.84088 9.27273C3.84088 10.0227 3.97725 10.7273 4.2727 11.3864C4.54543 12.0455 4.93179 12.6136 5.43179 13.1136C5.93179 13.6136 6.49997 14 7.15906 14.2955C7.81815 14.5909 8.5227 14.7273 9.2727 14.7273C10.0227 14.7273 10.7272 14.5909 11.3863 14.2955C12.0454 14 12.6363 13.6136 13.1363 13.1136C13.6136 12.6364 14 12.0455 14.2954 11.3864C14.5909 10.7273 14.7272 10.0227 14.7272 9.27273C14.7272 8.52273 14.5909 7.79545 14.2954 7.13636C14 6.47727 13.6363 5.90909 13.1363 5.40909C12.6363 4.90909 12.0454 4.54546 11.3863 4.25C10.7272 3.97727 10.0227 3.84091 9.2727 3.84091ZM8.72736 7.63636C8.72736 8.13636 8.31827 8.54545 7.81827 8.54545C7.31827 8.54545 6.90918 8.13636 6.90918 7.63636C6.90918 7.11363 7.31827 6.72726 7.81827 6.72726C8.31827 6.72726 8.72736 7.11363 8.72736 7.63636ZM11.6364 7.63636C11.6364 8.13636 11.2273 8.54545 10.7273 8.54545C10.2273 8.54545 9.81819 8.13636 9.81819 7.63636C9.81819 7.11364 10.2273 6.72727 10.7273 6.72727C11.2273 6.72727 11.6364 7.11364 11.6364 7.63636ZM9.27272 11.25C8.27272 11.25 7.36363 11.5227 6.5909 12.0682L6.18181 11.6364C6.56817 11.25 7.04545 10.9318 7.56817 10.6818C8.0909 10.4545 8.65908 10.3636 9.27272 10.3636C9.88636 10.3636 10.4545 10.4545 10.9773 10.6818C11.5 10.9318 11.9773 11.25 12.3636 11.6364L11.9545 12.0682C11.1818 11.5227 10.2954 11.25 9.27272 11.25ZM14.7273 16.5682V15.6364L15.6364 14.7273H16.5682L22 20.1591L20.1591 22L14.7273 16.5682Z"
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
