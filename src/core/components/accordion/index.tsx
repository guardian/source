import React, { useState, ReactElement, ReactNode } from "react"
import {
	accordion,
	button,
	labelText,
	titleRow,
	accordionRow,
	showHide,
	showHideText,
	svgContainer,
	showAccordionElement,
	hideAccordionElement,
} from "./styles"
import { Props } from "@guardian/src-helpers"
import { SvgChevronDownSingle, SvgChevronUpSingle } from "@guardian/src-svgs"

interface AccordionProps extends Props {
	children: ReactElement[]
}

const Accordion = ({ children }: AccordionProps) => {
	return (
		<div css={accordion}>
			{React.Children.map(
				children,
				(childElement: ReactElement, childIndex: number) => {
					return React.cloneElement(
						childElement,
						Object.assign(
							{},
							childElement.props,
							{ id: `accordion${childIndex + 1}` },
							{ key: childIndex },
						),
					)
				},
			)}
		</div>
	)
}

interface AccordionRowProps extends Props {
	label: string
	children: ReactNode
	id?: string
}

const AccordionRow = ({ children, label, id }: AccordionRowProps) => {
	const [accordionOpen, toggleAccordion] = useState(false)
	const toggleToClosed = () => toggleAccordion(false)
	const toggleToOpen = () => toggleAccordion(true)

	return (
		<div css={accordionRow}>
			<button
				aria-expanded={accordionOpen}
				onClick={accordionOpen ? toggleToClosed : toggleToOpen}
				aria-controls={id}
				css={[titleRow, button]}
			>
				<strong css={labelText}>{label}</strong>
				<div css={showHide}>
					<div
						css={
							accordionOpen
								? showAccordionElement
								: hideAccordionElement
						}
					>
						<div css={showHideText}>Hide</div>
						<div css={svgContainer}>
							<SvgChevronUpSingle />
						</div>
					</div>
					<div
						css={
							accordionOpen
								? hideAccordionElement
								: showAccordionElement
						}
					>
						<div css={showHideText}>Show</div>
						<div css={svgContainer}>
							<SvgChevronDownSingle />
						</div>
					</div>
				</div>
			</button>
			<div
				id={id}
				hidden={!accordionOpen}
				css={
					accordionOpen ? showAccordionElement : hideAccordionElement
				}
			>
				{children}
			</div>
		</div>
	)
}

export { Accordion, AccordionRow }
