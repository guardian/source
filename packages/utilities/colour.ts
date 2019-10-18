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

export const darken = (hexInput: string, lum: number = 0): string => {
	const hex = normaliseHex(hexInput)

	let rgb = "#"
	let colour
	for (let i = 0; i < 3; i++) {
		colour = parseInt(hex.substr(i * 2, 2), 16)
		colour = Math.round(
			Math.min(Math.max(0, colour + colour * -lum), 255),
		).toString(16)
		rgb += ("00" + colour).substr(colour.length)
	}

	return rgb
}

export const lighten = (hexInput: string, lum: number = 0): string => {
	const hex = normaliseHex(hexInput)

	let rgb = "#"
	let colour
	for (let i = 0; i < 3; i++) {
		colour = parseInt(hex.substr(i * 2, 2), 16)
		colour = Math.round(
			Math.min(Math.max(0, colour + colour * lum), 255),
		).toString(16)
		rgb += ("00" + colour).substr(colour.length)
	}

	return rgb
}
