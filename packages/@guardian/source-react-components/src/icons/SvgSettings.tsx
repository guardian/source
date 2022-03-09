import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgSettings = ({
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
				d="M23.75 17.225c-.175.825-.55 1.65-.925 2.35l1.175 1.9c-.7.925-1.575 1.8-2.475 2.475l-1.9-1.225c-.775.425-1.525.75-2.35 1.025l-.475 2.125c-.575.1-1.125.175-1.75.175a9.885 9.885 0 01-1.75-.175l-.475-2.175c-.825-.225-1.65-.55-2.35-.975l-1.9 1.225c-.925-.7-1.8-1.55-2.475-2.475l1.225-1.925c-.425-.675-.75-1.5-.975-2.325l-2.175-.475A9.885 9.885 0 014 15c0-.625.075-1.175.175-1.75l2.175-.475c.225-.825.55-1.6.975-2.35L6.1 8.525c.675-.9 1.55-1.775 2.475-2.475l1.9 1.175c.7-.375 1.525-.75 2.35-.925l.475-2.225C13.825 4 14.475 4 15.05 4s1.175.025 1.75.075l.475 2.225c.825.175 1.575.55 2.35.925l1.9-1.175c.925.725 1.75 1.55 2.475 2.475l-1.175 1.9c.375.725.75 1.525.925 2.35l2.225.475a20.482 20.482 0 010 3.5l-2.225.475zm-8.7 4.85c3.9 0 7.075-3.175 7.075-7.075 0-3.9-3.175-7.075-7.075-7.075-3.9 0-7.075 3.175-7.075 7.075 0 3.9 3.175 7.075 7.075 7.075z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Settings
			</span>
		) : (
			''
		)}
	</>
);
