import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { breakpoints } from '@guardian/source-foundations';
import type { LineCount } from './Lines';

const wavelength = 12;
const amplitude = 3;
const thickness = 1;
const gap = 3;
const squiggliness = wavelength / 8;
const maxWidth = breakpoints.wide;

export const getHeight = (count: LineCount): number =>
	thickness + gap * Math.max(count, 1);

const d = [
	`M 0 ${thickness / 2}`,
	`q ${squiggliness} 0 ${wavelength / 4} ${amplitude / 2}`,
	`t ${wavelength / 4} ${amplitude / 2}`,
	`t ${wavelength / 4} -${amplitude / 2}`,
	`t ${wavelength / 4} -${amplitude / 2}`,
	`t 12 0`,
].join(' ');

export const SquigglyLines = ({
	count,
	color,
}: {
	count: LineCount;
	color: string;
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
					<g strokeWidth={thickness} stroke={color} fill="none">
						<path id="squiggle" d={d} />
						{repeatedLines}
					</g>
				</pattern>
			</defs>

			<rect
				width={maxWidth}
				height={height}
				fill="url(#squiggly-pattern)"
			/>
		</svg>
	);
};
