import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"

export const stack = css`
	& > * {
		width: 100%;
	}
`

export const stackSpace1 = css`
	& > * + * {
		margin-top: ${space[1]}px;
	}
`
export const stackSpace2 = css`
	& > * + * {
		margin-top: ${space[2]}px;
	}
`
export const stackSpace3 = css`
	& > * + * {
		margin-top: ${space[3]}px;
	}
`
export const stackSpace4 = css`
	& > * + * {
		margin-top: ${space[4]}px;
	}
`
export const stackSpace5 = css`
	& > * + * {
		margin-top: ${space[5]}px;
	}
`

export const stackSpace6 = css`
	& > * + * {
		margin-top: ${space[6]}px;
	}
`

export const stackSpace9 = css`
	& > * + * {
		margin-top: ${space[9]}px;
	}
`

export const stackSpace12 = css`
	& > * + * {
		margin-top: ${space[12]}px;
	}
`

export const stackSpace24 = css`
	& > * + * {
		margin-top: ${space[24]}px;
	}
`
