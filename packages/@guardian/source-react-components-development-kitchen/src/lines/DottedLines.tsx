import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { breakpoints, neutral } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const dotRadius = 1;
const gridSize = 3;
const maxWidth = breakpoints.wide;

export const getHeight = (count: LineCount): number => gridSize * count;

export const DottedLines = ({
	count = 4,
	color = neutral[86],
	cssOverrides,
}: {
	count?: LineCount;
	color?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}): EmotionJSX.Element => {
	const dots = [];
	for (let index = 1; index <= count; index++) {
		dots.push(
			<circle
				key={index}
				fill={color}
				cx={gridSize / 2}
				cy={gridSize * (index - 1 / 2)}
				r={dotRadius}
			/>,
		);
	}

	const height = getHeight(count);
	const viewBox = `0 0 ${gridSize} ${height}`;

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
					id="dotted-pattern"
					viewBox={viewBox}
					width={gridSize}
					height={height}
					patternUnits="userSpaceOnUse"
					preserveAspectRatio="none"
				>
					{dots}
				</pattern>
			</defs>

			<rect width={maxWidth} height={height} fill="url(#dotted-pattern)" />
		</svg>
	);
};
