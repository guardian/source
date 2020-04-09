import React, { useState, ReactNode } from "react"
import {
	accordion,
	labelText,
	titleRow,
	accordionRow,
	accordionToggle,
	showAccordionElement,
	hideAccordionElement,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { SvgChevronDownSingle, SvgChevronUpSingle } from "@guardian/src-svgs"

interface AccordionProps extends Props {
	label: string
	children: ReactNode
}

const Accordion = ({ children, label }: AccordionProps) => {
	const [accordionOpen, toggleAccordion] = useState(false)

	return (
		<div css={accordion}>
			<div css={titleRow}>
				<strong css={labelText}>{label}</strong>
				<div css={accordionToggle}>
					<div
						css={
							accordionOpen
								? showAccordionElement
								: hideAccordionElement
						}
						onClick={() => toggleAccordion(false)}
					>
						Hide
					</div>
					<div
						css={
							accordionOpen
								? showAccordionElement
								: hideAccordionElement
						}
					>
						<SvgChevronUpSingle />
					</div>
					<div
						css={
							accordionOpen
								? hideAccordionElement
								: showAccordionElement
						}
						onClick={() => toggleAccordion(true)}
					>
						Show
					</div>
					<div
						css={
							accordionOpen
								? hideAccordionElement
								: showAccordionElement
						}
					>
						<SvgChevronDownSingle />
					</div>
				</div>
			</div>
			<div
				css={
					accordionOpen ? showAccordionElement : hideAccordionElement
				}
			>
				{children}
			</div>
		</div>
	)
}

interface AccordionRowProps extends Props {
	children: ReactNode
}

const AccordionRow = ({ children }: AccordionRowProps) => {
	return <div css={accordionRow}>{children}</div>
}

export { Accordion, AccordionRow }
