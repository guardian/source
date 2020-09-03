import { line } from "@guardian/src-foundations/palette"

const dotRadius = 1
const gridSize = 3
const count = 4

export const height = gridSize * count

const svg = [
	`<svg width="${gridSize}" height="${height}" viewBox="0 0 ${gridSize} ${height}" xmlns="http://www.w3.org/2000/svg">`,
]

for (let offset = gridSize / 2; offset < height; offset += gridSize) {
	svg.push(
		`<circle fill="${line.primary}"
		cx="${gridSize / 2}" cy="${offset}" r="${dotRadius}" />`,
	)
}

svg.push(`</svg>`)

const dottedSvg = encodeURIComponent(svg.join())

export const dottedImage = `data:image/svg+xml,${dottedSvg}`
