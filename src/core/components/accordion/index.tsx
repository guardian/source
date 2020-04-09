import React, { useState, ReactNode } from "react"
import {
	accordion,
	labelText,
	titleRow,
	accordionRow,
	accordionToggle,
	showAccordionElement,
	hideAccordionElement,
	grey,
	white,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { SvgChevronDownSingle, SvgChevronUpSingle } from "@guardian/src-svgs"

type Colours = "grey" | "white"

const backgroundColours = {
	grey: grey,
	white: white,
}

interface AccordionProps extends Props {
	label: string
	children: ReactNode
	bacgroundColour: Colours
}

const Accordion = ({ children, label, backgroundColour }: AccordionProps) => {
	const [accordionOpen, toggleAccordion] = useState(false)

	return (
		<div
			css={[accordion, backgroundColours[backgroundColour]]}
			aria-label="tablist"
		>
			<div css={titleRow}>
				<strong css={labelText}>{label}</strong>
				<button
					aria-controls="accordionBody"
					aria-expanded={accordionOpen.toString()}
					css={accordionToggle}
				>
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
				</button>
			</div>
			<div
				id="accordionBody"
				aria-expanded={accordionOpen.toString()}
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
