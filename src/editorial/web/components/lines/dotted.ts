import { line } from "@guardian/src-foundations/palette"

const dottedSvg = encodeURIComponent(`
<svg width="3" height="3" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg">
		<circle fill="${line.primary}" cx="1.5" cy="1.5" r="1" />
</svg>
`)

export const dottedImage = `data:image/svg+xml,${dottedSvg}`
