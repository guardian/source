import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgReload = ({
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
					d="M11.5883 1C7.82977 1 4.4972 2.90433 2.54276 5.78588L2.66804 6.46241L3.54503 6.98861L4.22157 6.81321C5.85027 4.50797 8.50631 2.9795 11.5883 2.9795C16.5245 2.9795 20.5838 7.03872 20.5838 12.0251C20.5838 16.9863 16.5245 21.0205 11.5883 21.0205C8.75688 21.0205 6.32635 19.7677 4.64754 17.7631L8.2808 17.1617V15.9089H1.86622L1.39014 16.385V23H2.61793L3.24435 19.2164C5.24891 21.5467 8.20563 23 11.5883 23C17.6772 23 22.6134 18.0888 22.6134 12.0251C22.6134 5.91116 17.6772 1 11.5883 1Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Reload
				</span>
			) : (
				''
			)}
		</>
	);
};
