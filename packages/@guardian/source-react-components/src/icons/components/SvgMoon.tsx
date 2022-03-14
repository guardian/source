import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgMoon = ({
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
					d="M8.03526 0C6.7672 0.547006 5.54887 1.31779 4.47972 2.31234C-0.0455046 6.73812 -0.169825 13.9486 4.18136 18.5236C8.632 23.0488 15.8425 23.1732 20.3926 18.7971C21.4369 17.7777 22.2823 16.5842 22.8293 15.3162C18.6521 17.0566 13.5799 16.1864 10.1984 12.7303C6.84179 9.24937 6.14561 4.12741 8.03526 0Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Night, Darkmode,
				</span>
			) : (
				''
			)}
		</>
	);
};
