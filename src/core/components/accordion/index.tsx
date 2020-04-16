import React, { useState, ReactElement, ReactNode } from "react"
import {
	accordionRow,
	button,
	labelText,
	showHideLabel,
	chevronIcon,
	chevronIconUp,
	chevronIconDown,
	expandedBody,
	collapsedBody,
} from "./styles"
import { css } from "@emotion/core"
import { visuallyHidden } from "@guardian/src-foundations/accessibility"
import { Props } from "@guardian/src-helpers"
import { SvgChevronUpSingle } from "@guardian/src-svgs"

interface AccordionProps extends Props {
	children: ReactElement[]
}

const Accordion = ({ children }: AccordionProps) => {
	return <div>{children}</div>
}

interface AccordionRowProps extends Props {
	label: string
	children: ReactNode
}

const AccordionRow = ({ children, label }: AccordionRowProps) => {
	const [expanded, setExpanded] = useState(false)
	const collapse = () => setExpanded(false)
	const expand = () => setExpanded(true)

	return (
		<div css={accordionRow}>
			<button
				aria-expanded={expanded}
				onClick={expanded ? collapse : expand}
				css={button}
			>
				<strong css={labelText}>{label}</strong>
				<div
					css={[
						showHideLabel,
						chevronIcon,
						expanded ? chevronIconUp : chevronIconDown,
					]}
				>
					<span>
						{expanded ? (
							"Hide"
						) : (
							<>
								Show
								<span
									css={css`
										${visuallyHidden}
									`}
								>
									{" "}
									more
								</span>
							</>
						)}
					</span>
					<SvgChevronUpSingle />
				</div>
			</button>
			<div css={expanded ? expandedBody : collapsedBody}>
				<div hidden={!expanded}>{children}</div>
			</div>
		</div>
	)
}

export { Accordion, AccordionRow }
