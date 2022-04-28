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
			d="M8.848 20.06c1 .304 2.061.455 3.152.455 5.515 0 10-4.151 10-9.242C22 6.152 17.515 2 12 2S2 6.152 2 11.273c0 2.606 1.182 4.97 3.06 6.636V22l3.788-1.94Zm1.637-8.302 2.576 2.666 5.454-5.727-4.97 2.727-2.575-2.666-5.455 5.727 4.97-2.727Z"
		/>
	</svg>
);

export const SvgFacebookMessenger = ({
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
				Facebook Messenger logo
			</span>
		) : (
			''
		)}
	</>
);
