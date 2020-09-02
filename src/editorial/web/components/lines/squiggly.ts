import { line } from "@guardian/src-foundations/palette"

const wavelength = 12
const amplitude = 3
const thickness = 1
const count = 4
const gap = 3
const squiggliness = wavelength / 8

export const height = thickness + gap * Math.max(count, 1)

const d = [
	`M 0 ${thickness / 2}`,
	`q ${squiggliness} 0 ${wavelength / 4} ${amplitude / 2}`,
	`t ${wavelength / 4} ${amplitude / 2}`,
	`t ${wavelength / 4} -${amplitude / 2}`,
	`t ${wavelength / 4} -${amplitude / 2}`,
	`t 12 0`,
].join(" ")

const repeatedLines = []
for (let index = 1; index < count; index++) {
	repeatedLines.push(`<use y="${gap * index}" xlink:href="#squiggle" />`)
}

const squigglySvg = encodeURIComponent(`
<svg
	xmlns="http://www.w3.org/2000/svg" width="${wavelength}" height="${height}"
	viewBox="0 0 ${wavelength} ${height}"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<g stroke-width="${thickness}" stroke="${line.primary}" fill="none">
		<path id="squiggle" d="${d}" />
		${repeatedLines.join()}
	</g>
</svg>
`)

export const squigglyImage = `data:image/svg+xml;utf-8,${squigglySvg}`
