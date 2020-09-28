import { css } from "@emotion/core"
import { space } from "@guardian/src-foundations"
import { StackSpace } from "."

export const stack = css`
	& > * {
		width: 100%;
	}
`

export const stackSpace = (number: StackSpace) => css`
	& > * + * {
		margin-top: ${space[number]}px;
	}
`
