import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { breakpoints, neutral } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const wavelength = 12;
const amplitude = 3 / 2;
const thickness = 1;
const gap = 3;
const squiggliness = wavelength / 8;
const maxWidth = breakpoints.wide;

export const getHeight = (count: LineCount): number =>
	thickness + gap * Math.max(count, 1);

const d = [
	`M 0,${thickness / 2}`,
	`q ${squiggliness},0 ${wavelength / 4},${amplitude}`,
	`t ${wavelength / 4},${amplitude}`,
	`${wavelength / 4},${-amplitude}`,
	`${wavelength / 4},${-amplitude}`,
].join(' ');

export const SquigglyLines = ({
	count = 4,
	color = neutral[86],
	cssOverrides,
}: {
	count?: LineCount;
	color?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}): EmotionJSX.Element => {
	const repeatedLines = [];
	for (let index = 1; index < count; index++) {
		repeatedLines.push(
			<use key={index} y={gap * index} xlinkHref="#squiggle" />,
		);
	}

	const height = getHeight(count);

	const viewBox = `0 0 ${wavelength} ${height}`;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
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
					id="squiggly-pattern"
					viewBox={viewBox}
					width={wavelength}
					height={height}
					patternUnits="userSpaceOnUse"
					preserveAspectRatio="none"
				>
					<g
						strokeWidth={thickness}
						stroke={color}
						strokeLinecap="square"
						fill="none"
					>
						<path id="squiggle" d={d} />
						{repeatedLines}
					</g>
				</pattern>
			</defs>

			<rect width={maxWidth} height={height} fill="url(#squiggly-pattern)" />
		</svg>
	);
};
