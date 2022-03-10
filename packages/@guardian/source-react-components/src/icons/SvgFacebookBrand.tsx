import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgFacebookBrand = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="0 0 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.585 9.12498V12.25H9.16V15.7H12.585V25.9999H16.71V15.7H20.085L20.835 12.25H16.71V9.49998C16.71 7.97499 17.61 7.44999 18.785 7.44999H20.835L20.71 4.175C19.685 4.075 18.885 4 17.71 4C14.785 4 12.585 5.82499 12.585 9.12498Z"
					fill="#1877F2"
				/>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Facebook logo
				</span>
			) : (
				''
			)}
		</>
	);
};
