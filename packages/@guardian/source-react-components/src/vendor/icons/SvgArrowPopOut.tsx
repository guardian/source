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
			d="m23 2.975-.475-.475H15.25v1.25l4.475.575L14 10.075l1.4 1.425 5.75-5.775.6 4.525H23V2.975ZM11 8.5v-2H1v2h10Zm-2 4v-2H1v2h8Zm6 4v-2H1v2h14Zm-4 4v-2H1v2h10Z"
		/>
	</svg>
);

export const SvgArrowPopOut = ({
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
				Pop out
			</span>
		) : (
			''
		)}
	</>
);
