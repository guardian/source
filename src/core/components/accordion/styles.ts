import { css } from "@emotion/core"
import { border } from "@guardian/src-foundations/palette"
import { headline } from "@guardian/src-foundations/typography"

export const accordion = css`
	border: 1px solid ${border.primary};
`

export const label = css`
	${headline.xxxsmall()};
`
