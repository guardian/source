import React, { useState, ReactElement, ReactNode } from "react"
import {
	accordion,
	accordionRow,
	button,
	labelText,
	toggle,
	toggleLabel,
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
	hideToggleLabel?: boolean
	children: ReactElement[]
}

const Accordion = ({ hideToggleLabel = false, children }: AccordionProps) => {
	return (
		<div css={accordion}>
			{React.Children.map(children, child => {
				return React.cloneElement(child, { hideToggleLabel })
			})}
		</div>
	)
}

interface AccordionRowProps extends Props {
	label: string
	hideToggleLabel?: boolean
	children: ReactNode
}

const AccordionRow = ({
	label,
	hideToggleLabel = false,
	children,
}: AccordionRowProps) => {
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
						toggle,
						chevronIcon,
						expanded ? chevronIconUp : chevronIconDown,
					]}
				>
					{hideToggleLabel ? (
						<span
							css={css`
								${visuallyHidden}
							`}
						>
							{expanded ? "Hide" : "Show more"}
						</span>
					) : (
						<span css={toggleLabel}>
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
					)}
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
