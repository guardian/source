import { css } from "@emotion/core"
import { space, size } from "@guardian/src-foundations"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import {
	ChoiceCardTheme,
	choiceCardDefault,
} from "@guardian/src-foundations/themes"

export const fieldset = css`
	display: flex;
	justify-content: flex-start;
	border: 0;
`

export const input = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	${visuallyHidden};

	&:checked + label {
		color: ${choiceCard.textChecked};
		border-color: ${choiceCard.borderColorChecked};
		background-color: ${choiceCard.backgroundChecked};
	}
`

export const choiceCard = ({
	choiceCard,
}: { choiceCard: ChoiceCardTheme } = choiceCardDefault) => css`
	flex: 1 0 auto;
	box-sizing: border-box;
	display: flex;
	/* TODO: let's talk about size! */
	min-height: ${size.large}px;
	max-width: 150px;
	margin: 0 ${space[2]}px 0 0;
	align-items: center;
	justify-content: center;

	border-width: 2px;
	border-style: solid;
	/* TODO: prefer curentColor unless it has to be different to text colour */
	border-color: ${choiceCard.borderColor};
	border-radius: 4px;
	position: relative;

	color: ${choiceCard.text};
	${textSans.medium({ fontWeight: "bold" })};
	cursor: pointer;

	&:focus {
		${focusHalo};
	}

	&:hover {
		color: ${choiceCard.textChecked};
		border-color: ${choiceCard.borderColorChecked};
	}
`
