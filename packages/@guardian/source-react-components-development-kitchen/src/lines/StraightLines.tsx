import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { breakpoints, space } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const thickness = 1;
const gapVertical = space[1];
const maxWidth = breakpoints.wide;

const getHeight = (count: LineCount): number =>
	gapVertical * (count - 1) + thickness;

export const StraightLines = ({
	count,
	color,
	cssOverrides,
}: {
	count: LineCount;
	color: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}): EmotionJSX.Element => {
	const height = getHeight(count);
	const viewBox = `0 0 ${maxWidth} ${height}`;

	const lines = [];
	for (let index = 0; index < count; index++) {
		lines.push(
			<line
				key={index}
				x1={1}
				x2={maxWidth}
				y1={index * gapVertical + 0.5}
				y2={index * gapVertical + 0.5}
			/>,
		);
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height={height}
			viewBox={viewBox}
			preserveAspectRatio="none"
			stroke={color}
			strokeWidth={thickness}
			css={cssOverrides}
		>
			{lines}
		</svg>
	);
};
