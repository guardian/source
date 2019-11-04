import { palette } from "@guardian/src-foundations"

const visuallyHidden = `
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	top: 0;
	left: 0;
`

// TODO: migrate to using context-specific alias
const focusHalo = `
	outline: 0;
	box-shadow: 0 0 0 5px ${palette.sport.bright};
	z-index: 9;
`

export { visuallyHidden, focusHalo }
