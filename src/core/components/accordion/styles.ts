import { css } from "@emotion/core"
import { border } from "@guardian/src-foundations/palette"
import { headline, textSans } from "@guardian/src-foundations/typography"
import { space } from "@guardian/src-foundations"
import { background } from "@guardian/src-foundations/palette"

export const accordion = css`
	border-top: 1px solid ${border.primary};
	border-bottom: 1px solid ${border.primary};
	padding: ${space[2]}px 0 ${space[4]}px ${space[2]}px;

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
`

export const labelText = css`
	${headline.xxxsmall()};
`

export const titleRow = css`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${space[3]}px;
`

export const accordionRow = css`
	${textSans.small()};
	margin-bottom: ${space[3]}px;
`

export const accordionToggle = css`
	display: inline-flex;
	align-items: middle;

	div {
		${textSans.small({ fontWeight: "bold" })};
	}
	div svg {
		height: 15px;
		width: 15px;
		margin-top: 4px;
	}
`

export const showAccordionElement = css`
	max-height: auto;
	overflow: visible;
	transition: max-height 400ms;
	margin-right: ${space[2]}px;

	> * {
		transition: opacity 300ms 200ms;
		opacity: 1;
	}
`

export const hideAccordionElement = css`
	max-height: 0;
	height: 0;
	width: 0;
	overflow: hidden;
	transition: max-height 400ms;

	> * {
		opacity: 0;
		transition: opacity 400ms;
		margin: 0;
	}
`
export const grey = css`
	background-color: #f6f6f6;
`

export const white = css`
	background-color: ${background.primary};
`
