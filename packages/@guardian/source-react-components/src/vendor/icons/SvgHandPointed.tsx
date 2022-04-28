import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.001 1.723c-2.697 0-5.169.949-7.167 2.472l-.524-.524C6.133 1.448 8.88 0 12.001 0c3.122 0 5.869 1.448 7.692 3.67l-.525.525c-1.998-1.523-4.47-2.472-7.167-2.472Zm7.017 11.287L17.52 22h-7.017l-.999-2.972-4.22-4.67v-.649l1.199-1.223 3.37 1.823L10.978 4.02H13l.25 6.743 5.244 1.248.524 1Z"
		/>
	</svg>
);

export const SvgHandPointed = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<Svg size={size} />
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Interactive
			</span>
		) : (
			''
		)}
	</>
);
