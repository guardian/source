import React, { useState, useEffect, ReactNode } from 'react';
import { Props } from '@guardian/src-helpers';
import { SvgChevronDownSingle } from '@guardian/src-icons';
import {
	accordionRow,
	button,
	labelText,
	toggle,
	toggleLabel,
	chevronIconUp,
	chevronIconDown,
	toggleIconWithLabel,
	expandedBody,
	collapsedBody,
} from './styles';
import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
import { AccordionRowNoJS } from './AccordionRowNoJS';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export interface AccordionRowProps extends Props {
	/**
	 * A line of text to summarise the information that lies within the expanded state. Appears in the collapsed state, as well as prominently at the top of the expanded state.
	 */
	label: string;
	/**
	 * A callback function called when the component is opened or closed. Receives the click event as an argument.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	/**
	 * @ignore passed down by the parent <Accordion />
	 */
	hideToggleLabel?: boolean;
	children: ReactNode;
}

export const AccordionRow = ({
	label,
	hideToggleLabel = false,
	children,
	cssOverrides,
	onClick = () => undefined,
}: AccordionRowProps) => {
	const [expanded, setExpanded] = useState(false);
	const collapse = () => setExpanded(false);
	const expand = () => setExpanded(true);
	const [isBrowser, setIsBrowser] = useState(false);

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		expanded ? collapse() : expand();
		onClick(event);
	}

	useEffect(() => {
		setIsBrowser(true);
	});

	if (isBrowser) {
		return (
			<div
				css={(theme) => [
					accordionRow(theme.accordion && theme),
					cssOverrides,
				]}
			>
				<button
					type="button"
					aria-expanded={expanded}
					onClick={handleClick}
					css={(theme) => [
						button(theme.accordion && theme),
						expanded ? chevronIconUp : chevronIconDown,
						!hideToggleLabel ? toggleIconWithLabel : '',
					]}
				>
					<strong css={labelText}>{label}</strong>
					<div css={toggle}>
						{hideToggleLabel ? (
							<span css={visuallyHidden}>
								{expanded ? 'Hide' : 'Show more'}
							</span>
						) : (
							<span css={toggleLabel}>
								{expanded ? (
									'Hide'
								) : (
									<>
										Show
										<span css={visuallyHidden}> more</span>
									</>
								)}
							</span>
						)}
						<SvgChevronDownSingle />
					</div>
				</button>
				<div css={expanded ? expandedBody : collapsedBody}>
					<div hidden={!expanded}>{children}</div>
				</div>
			</div>
		);
	}

	return (
		<AccordionRowNoJS
			label={label}
			hideToggleLabel={hideToggleLabel}
			cssOverrides={cssOverrides}
		>
			{children}
		</AccordionRowNoJS>
	);
};
