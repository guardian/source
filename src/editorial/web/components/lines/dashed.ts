import { space } from '@guardian/src-foundations';
import { LineCount } from '.';

const thickness = 1;
const gapHorizontal = 1;
const viewHeight = space[1];
const width = thickness + gapHorizontal;

export const height = (count: LineCount): number =>
	viewHeight * (count - 1) + thickness;

const dashedSvg = (count: LineCount, colour: string): string => {
	return encodeURIComponent(`
	<svg xmlns="http://www.w3.org/2000/svg"
		width="${width}" height="${viewHeight}"
		viewBox="0 0 ${width} ${viewHeight}"
		stroke="${colour}"
		stroke-width="${thickness}"
	>
		<path d="M0,${thickness / 2} h${thickness} " />
	</svg>
	`);
};

export const dashedImage = (count: LineCount = 1, colour: string): string =>
	`data:image/svg+xml;utf-8,${dashedSvg(count, colour)}`;
