import { border } from "@guardian/src-foundations/palette"

const squigglySvg = encodeURIComponent(`
<svg
	xmlns="http://www.w3.org/2000/svg" width="12" height="15"
	viewBox="0 0 12 15"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<g stroke-width="1" stroke="${border.secondary}" fill="none">
		<path id="squiggle" d=" M 0 0.5 q 1.5 0 3 1.5 t 3 1.5 t 3 -1.5 t 3 -1.5" />
		<use y="3" xlink:href="#squiggle" />
		<use y="6" xlink:href="#squiggle" />
		<use y="9" xlink:href="#squiggle" />
	</g>
</svg>
`)

export const squigglyImage = `data:image/svg+xml;utf-8,${squigglySvg}`
