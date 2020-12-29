import { css } from "@emotion/react"
import { space, transitions } from "@guardian/src-foundations"
import { height, width } from "@guardian/src-foundations/size"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import { radioDefault } from "@guardian/src-foundations/themes"
import { resets } from "@guardian/src-foundations/utils"

export const fieldset = ({ radio } = radioDefault) => css`
	${resets.fieldset};
	display: flex;
	justify-content: flex-start;

	&[aria-invalid="true"] input {
		border: 4px solid ${radio.borderError};
	}
`

export const label = ({ radio } = radioDefault) => css`
	cursor: pointer;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;

	&:hover {
		input {
			border-color: ${radio.borderHover};
		}
	}
`

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`

export const radio = ({ radio } = radioDefault) => css`
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 2px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${radio.border};

	&:checked {
		color: ${radio.backgroundChecked};
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (appearance: none) {
		appearance: none;
		background-color: transparent;

		&:after {
			background: currentColor;
			position: absolute;
			content: "";
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`

export const labelText = ({ radio } = radioDefault) => css`
	${textSans.medium({ lineHeight: "regular" })};
	color: ${radio.textLabel};
`

export const labelTextWithSupportingText = css`
	${textSans.medium({ fontWeight: "bold", lineHeight: "regular" })};
`

export const supportingText = ({ radio } = radioDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${radio.textLabelSupporting};
`

/*
TODO: Chrome <86 doesn't allow us to use display:flex on fieldsets.
The display:block and vertical-align:middle here are a workaround
which can be replaced by flex-direction:row when the issue is fixed
https://bugs.chromium.org/p/chromium/issues/detail?id=375693
*/
export const horizontal = css`
	display: block;

	label {
		display: inline-flex;
		margin-right: ${space[5]}px;
	}
	input,
	.src-radio-label-text {
		vertical-align: middle;
	}
`
export const vertical = css`
	flex-direction: column;
`
