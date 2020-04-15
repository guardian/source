import { css } from "@emotion/core"
import { border } from "@guardian/src-foundations/palette"
import { headline, textSans } from "@guardian/src-foundations/typography"
import { space } from "@guardian/src-foundations"

export const accordion = css`
	background-color: transparent;
`

export const accordionRow = css`
	border-top: 1px solid ${border.primary};
	:last-of-type {
		border-bottom: 1px solid ${border.primary};
	}
	padding: ${space[2]}px 0 ${space[4]}px ${space[2]}px;
`

export const button = css`
	background: none;
	outline: none;
	border: none;
	padding: 0;
	cursor: pointer;
	text-align: left;
`

export const labelText = css`
	${headline.xxxsmall()};
	margin-right: ${space[4]}px;
`

export const titleRow = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: ${space[3]}px;
	align-items: baseline;
`

export const showHide = css`
	div {
		display: flex;
	}
`

export const showHideText = css`
	${textSans.small({ fontWeight: "bold" })};
	margin-right: ${space[2]}px;
`

export const svgContainer = css`
	height: 22px;
	width: 15px;
	svg {
		height: auto;
		width: 100%;
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
