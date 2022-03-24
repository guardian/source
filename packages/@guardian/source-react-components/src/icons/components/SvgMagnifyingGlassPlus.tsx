import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgMagnifyingGlassPlus = ({
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
					d="M9.27273 2C13.2955 2 16.5227 5.29545 16.5227 9.27273C16.5227 13.2955 13.2955 16.5227 9.27273 16.5227C5.25 16.5227 2 13.2955 2 9.27273C2 5.29545 5.25 2 9.27273 2ZM9.2727 3.84091C6.24997 3.84091 3.84088 6.25 3.84088 9.27273C3.84088 12.2727 6.24997 14.7273 9.2727 14.7273C12.2727 14.7273 14.7272 12.2727 14.7272 9.27273C14.7272 6.25 12.2727 3.84091 9.2727 3.84091ZM8.59092 5.63636H9.95456V8.59091H12.9091V9.95454H9.95456V12.9091H8.59092V9.95454H5.63638V8.59091H8.59092V5.63636ZM16.5682 14.7273L22 20.1591L20.1591 22L14.7273 16.5682V15.6364L15.6364 14.7273H16.5682Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Zoom in
				</span>
			) : (
				''
			)}
		</>
	);
};
