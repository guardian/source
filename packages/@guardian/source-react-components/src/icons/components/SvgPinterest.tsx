import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgPinterest = ({
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
				<path d="M10.577 15.3027C10.037 18.1342 9.37742 20.8488 7.4236 22.2665C6.8205 17.987 8.30919 14.7771 9.00032 11.3609C7.81778 9.37684 9.14222 5.3838 11.6282 6.36793C14.687 7.57806 8.9793 13.7443 12.8107 14.5143C16.8116 15.3184 18.4449 7.57281 15.9642 5.054C12.3798 1.41703 5.53022 4.97122 6.37245 10.1783C6.57743 11.4515 7.89267 11.8378 6.89803 13.5946C4.6039 13.0861 3.91934 11.2768 4.00738 8.8644C4.14928 4.92261 7.55499 2.15152 10.9712 1.76917C15.2914 1.28564 19.3462 3.35508 19.906 7.41908C20.5366 12.006 17.9561 16.974 13.3363 16.6166C12.0841 16.5194 11.5585 15.8992 10.577 15.3027Z"></path>
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