// Mostly copied from
// https://www.sitepoint.com/javascript-generate-lighter-darker-color/

const normaliseHex = (hex: string): string => {
	const strippedHex = String(hex).replace(/[^0-9a-f]/gi, "")
	if (strippedHex.length < 6) {
		return (
			strippedHex[0] +
			strippedHex[0] +
			strippedHex[1] +
			strippedHex[1] +
			strippedHex[2] +
			strippedHex[2]
		)
	}

	return strippedHex
}

const applyLightnessToDimension = (hex: string, lightness: number): string => {
	const decimal = parseInt(hex, 16)

	return Math.round(
		Math.min(Math.max(0, decimal + 255 * (lightness / 100)), 255),
	).toString(16)
}

const transform = (hexInput: string, lightness: number): string => {
	const hex = normaliseHex(hexInput)

	let rgb = "#"
	let dimension
	for (let i = 0; i < 3; i++) {
		dimension = applyLightnessToDimension(hex.substr(i * 2, 2), lightness)
		rgb += ("00" + dimension).substr(dimension.length)
	}

	return rgb
}

export const darken = (hexInput: string, percentage: number = 0): string =>
	transform(hexInput, -percentage)

export const lighten = (hexInput: string, percentage: number = 0): string =>
	transform(hexInput, percentage)
