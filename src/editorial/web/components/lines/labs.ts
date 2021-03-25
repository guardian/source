import { line } from '@guardian/src-foundations/palette';
import { LineCount } from '.';

const thickness = 1;
const gapHorizontal = 3;
const gapVertical = 3;
const width = gapHorizontal + thickness;
const viewHeight = (thickness + gapVertical) * 2;

export const height = (count: LineCount): number =>
	(viewHeight * count) / 2 - gapVertical;

const labsSvg = (count: LineCount): string => {
	return encodeURIComponent(`
	<svg xmlns="http://www.w3.org/2000/svg"
		width="${width}" height="${viewHeight}"
		viewBox="0 0 ${width} ${viewHeight}"
		stroke="${line.primary}"
		stroke-width="${thickness}"
	>
		<path d="M0,0 h${width + 1}" />
		<path d="M0,${thickness + gapVertical} h${thickness} " />
	</svg>
	`);
};

export const labsImage = (count: LineCount = 2): string =>
	`data:image/svg+xml;utf-8,${labsSvg(count)}`;
