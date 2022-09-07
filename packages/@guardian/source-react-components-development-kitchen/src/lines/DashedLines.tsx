import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { breakpoints, neutral, space } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const thickness = 1;
const gapHorizontal = 1;
const gapVertical = space[1];
const width = thickness + gapHorizontal;
const maxWidth = breakpoints.wide;

const getHeight = (count: LineCount): number =>
	gapVertical * (count - 1) + thickness;

export const DashedLines = ({
	count = 4,
	color = neutral[86],
	cssOverrides,
}: {
	count?: LineCount;
	color?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}): EmotionJSX.Element => {
	const height = getHeight(count);
	const viewBox = `0 0 ${width} ${height}`;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height={height}
			viewBox={viewBox}
			preserveAspectRatio="xMinYMin meet"
			css={cssOverrides}
			aria-hidden="true"
			focusable="false"
		>
			<defs>
				<pattern
					id="dashed-pattern"
					viewBox={`0 0 ${width} ${gapVertical}`}
					width={width}
					height={gapVertical}
					patternUnits="userSpaceOnUse"
					preserveAspectRatio="none"
					stroke={color}
					strokeWidth={thickness}
				>
					<path d={`M0,${thickness / 2} h${thickness}`} />
				</pattern>
			</defs>

			<rect width={maxWidth} height={height} fill="url(#dashed-pattern)" />
		</svg>
	);
};
