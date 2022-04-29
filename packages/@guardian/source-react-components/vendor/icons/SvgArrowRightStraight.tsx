// DO NOT EDIT
// this file is auto-generated by packages/@guardian/source-react-components/scripts/create-icons/index.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';

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
			d="M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1v1.912Z"
		/>
	</svg>
);


		export const SvgArrowRightStraight = ({
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
						Arrow right
					</span>
				) : (
					''
				)}
			</>
		);