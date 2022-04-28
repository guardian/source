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
		<path d="M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2Zm1.133 13.933v.49c-.11.088-.266.155-.422.244a12.49 12.49 0 0 1-.511.2 2.347 2.347 0 0 1-.533.133 4.344 4.344 0 0 1-.511.044c-.356 0-.578-.066-.712-.2a.577.577 0 0 1-.222-.444c0-.178.022-.356.045-.533.022-.178.066-.356.11-.578l.934-4.245-.867-.2v-.466c.134-.045.312-.111.556-.178.222-.067.467-.111.733-.156.267-.044.511-.088.756-.11.244-.023.467-.045.667-.045l.244.155-1.244 5.89h.977Zm.423-7.466c-.2.177-.49.266-.823.266-.31 0-.577-.089-.8-.266a.878.878 0 0 1-.31-.69c0-.31.11-.555.31-.733.2-.177.467-.266.8-.266.356 0 .623.089.823.266.2.178.31.423.31.734-.022.289-.11.51-.31.689Z" />
	</svg>
);

export const SvgInfoRound = ({
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
				Information
			</span>
		) : (
			''
		)}
	</>
);
