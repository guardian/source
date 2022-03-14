import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgArrowContract = ({
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
					d="M13.9749 2.275V9.52497L14.4499 9.99997H21.7248V8.74997L17.2248 8.14998L22.9748 2.425L21.5498 1L15.8248 6.77498L15.2248 2.275H13.9749ZM9.97497 21.7249V14.475L9.49997 14H2.25V15.25L6.72498 15.8249L1 21.5749L2.4 22.9999L8.14998 17.2249L8.72497 21.7249H9.97497Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Arrow, Arrows,
				</span>
			) : (
				''
			)}
		</>
	);
};
