import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"

export const stack = css`
	& > * {
		width: 100%;
	}
`

export const stackSpace = (space) => css`
	& > * + * {
		margin-top: ${space[space]}px;
	}
`
