import React, { ReactNode } from "react"
import { accordion, label } from "./styles"
import { Props } from "@guardian/src-helpers"

interface AccordionProps extends Props {
	children: ReactNode
}

const Accordion = ({ children }: AccordionProps) => {
	return <div css={accordion}>{children}</div>
}

interface AccordionRowProps extends Props {
	label: string
	children: ReactNode
}

const AccordionRow = ({ label: labelText, children }: AccordionRowProps) => {
	return (
		<div>
			<strong css={label}>{labelText}</strong>
			<div>{children}</div>
		</div>
	)
}

export { Accordion, AccordionRow }
