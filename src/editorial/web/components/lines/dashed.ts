import { line } from '@guardian/src-foundations/palette';
import { LineCount } from '.';

const thickness = 1;
const gapHorizontal = 1;
const gapVertical = 4;
const width = thickness + gapHorizontal;
const viewHeight = thickness + gapVertical;

export const height = (count: LineCount): number =>
	(thickness + gapVertical) * count - gapVertical;

const dashedSvg = (count: LineCount): string => {
	return encodeURIComponent(`
	<svg xmlns="http://www.w3.org/2000/svg"
		width="${width}" height="${viewHeight}"
		viewBox="0 0 ${thickness + gapHorizontal} ${viewHeight}"
		stroke="${line.primary}"
		stroke-width="${thickness}"
	>
		<path d="M0,0 h${thickness} " />
	</svg>
	`);
};

export const dashedImage = (count: LineCount = 1): string =>
	`data:image/svg+xml;utf-8,${dashedSvg(count)}`;
