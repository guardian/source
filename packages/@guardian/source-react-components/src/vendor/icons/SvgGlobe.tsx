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
			d="M20 12c0 .715-.094 1.408-.27 2.068h-3.328a21.996 21.996 0 0 0 0-4.132h3.33c.175.659.268 1.35.268 2.064Zm-5.607-2.064c.068.656.105 1.346.105 2.064 0 .72-.037 1.411-.106 2.068H9.608A19.888 19.888 0 0 1 9.502 12c0-.718.037-1.408.106-2.064h4.785Zm1.718-2h2.781a8.03 8.03 0 0 0-3.871-3.346c.46.928.834 2.066 1.09 3.346ZM12 4c.003 0 .026 0 .079.024.06.027.163.088.302.219.288.27.638.756.976 1.506.277.617.52 1.355.71 2.187H9.933c.19-.832.432-1.57.71-2.187.337-.75.687-1.235.975-1.506.139-.13.243-.192.303-.22A.21.21 0 0 1 11.998 4H12Zm-3.02.59c-.461.928-.835 2.066-1.091 3.346H5.108A8.03 8.03 0 0 1 8.98 4.59ZM7.598 9.936h-3.33A8.011 8.011 0 0 0 4 12c0 .715.094 1.408.27 2.068h3.328a21.993 21.993 0 0 1 0-4.132Zm.292 6.132H5.11a8.03 8.03 0 0 0 3.87 3.342c-.46-.927-.834-2.064-1.09-3.342ZM12 20h-.002a.215.215 0 0 1-.076-.024 1.178 1.178 0 0 1-.303-.219c-.288-.27-.638-.756-.976-1.506a11.705 11.705 0 0 1-.708-2.183h4.13c-.189.83-.431 1.567-.708 2.183-.338.75-.688 1.235-.976 1.506a1.18 1.18 0 0 1-.303.22.212.212 0 0 1-.076.023H12Zm3.02-.59a8.03 8.03 0 0 0 3.87-3.342h-2.78c-.256 1.278-.63 2.415-1.09 3.342ZM12 2c4.076 0 7.582 2.438 9.14 5.936h.01v.022A9.965 9.965 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
		/>
	</svg>
);

export const SvgGlobe = ({
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
				Globe
			</span>
		) : (
			''
		)}
	</>
);
