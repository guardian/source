import { line } from "@guardian/src-foundations/palette"
import { LineCount } from "."

const dotRadius = 1
const gridSize = 3

export const height = (count: LineCount): number => gridSize * count

const dottedSvg = (count: LineCount): string => {
	const svg = [
		`<svg xmlns="http://www.w3.org/2000/svg" ` +
			`width="${gridSize}" height="${height(count)}" ` +
			`viewBox="0 0 ${gridSize} ${height(count)}" >`,
	]

	for (let index = 1; index <= count; index++) {
		svg.push(
			`<circle fill="${line.primary}" ` +
				`cx="${gridSize / 2}" ` +
				`cy="${gridSize * (index - 1 / 2)}" ` +
				`r="${dotRadius}" />`,
		)
	}

	svg.push(`</svg>`)
	return encodeURIComponent(svg.join())
}

export const dottedImage = (count: LineCount) =>
	`data:image/svg+xml,${dottedSvg(count)}`
