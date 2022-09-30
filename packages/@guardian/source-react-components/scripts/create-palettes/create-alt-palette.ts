import { palette } from '@guardian/source-foundations';

const hexToRGB = (hex: string, alpha: number) => {
	const r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	} else {
		return `rgba(${r}, ${g}, ${b})`;
	}
};

export const transformPalette = (alpha: number) => {
	const paletteMap = new Map<string, Record<number, string>>(
		Object.entries(palette),
	);

	for (const [paletteKey, colours] of paletteMap) {
		const colourMap = new Map<string, string>(Object.entries(colours));

		for (const [colourKey, colourValue] of colourMap) {
			colourMap.set(colourKey, hexToRGB(colourValue, alpha));
		}

		paletteMap.set(paletteKey, Object.fromEntries(colourMap));
	}

	return {
		paletteName: `paletteOpacity${alpha}`,
		paletteObject: Object.fromEntries(paletteMap),
	};
};
