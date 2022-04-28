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
			d="m2.57 21.429 17.1-17.124L18.387 3l-4.844 4.844c-.82-1.887-2.616-3.194-4.693-3.194-2.923 0-5.3 2.355-5.3 5.25C2.072 10.557 1 12.08 1 13.65a4.007 4.007 0 0 0 2.893 3.844l-2.618 2.618 1.295 1.317Zm5.71-3.76c1.767.007 3.693.008 4.237-.019l.032-.002h3.7l.001.002H19a4 4 0 0 0 0-8c-.53 0-1.06.097-1.55.3a4.532 4.532 0 0 0-.763-.687l-1.093 1.093A3.074 3.074 0 0 1 17 12.15a2.56 2.56 0 0 1 2-1 2.5 2.5 0 1 1 0 5h-1.5v-.001h-7.333v.001H9.8l-1.52 1.52Zm4.07-8.632c-.437-1.6-1.786-2.887-3.5-2.887-2.101 0-3.8 1.679-3.8 3.75 0 .699.231 1.323.468 1.965l.032.085-.6.2-.45-1c-1.072.293-2 1.352-2 2.5 0 1.383 1.101 2.5 2.5 2.5h.237l7.113-7.113Z"
		/>
	</svg>
);

export const SvgCrossedOutCloud = ({
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
				No wifi
			</span>
		) : (
			''
		)}
	</>
);
