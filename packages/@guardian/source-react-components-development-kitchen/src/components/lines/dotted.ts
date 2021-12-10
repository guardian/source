import { svgBackgroundImage } from '@guardian/source-foundations';
import type { LineCount } from '.';

const dotRadius = 1;
const gridSize = 3;

export const height = (count: LineCount): number => gridSize * count;

const dottedSvg = (count: LineCount, color: string): string => {
	const svg = [
		`<svg xmlns="http://www.w3.org/2000/svg" ` +
			`width="${gridSize}" height="${height(count)}" ` +
			`viewBox="0 0 ${gridSize} ${height(count)}" >`,
	];

	for (let index = 1; index <= count; index++) {
		svg.push(
			`<circle fill="${color}" ` +
				`cx="${gridSize / 2}" ` +
				`cy="${gridSize * (index - 1 / 2)}" ` +
				`r="${dotRadius}" />`,
		);
	}

	svg.push(`</svg>`);
	return svg.join();
};

export const dottedImage = (count: LineCount, color: string): string =>
	svgBackgroundImage(dottedSvg(count, color));
