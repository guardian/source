///<reference types="@emotion/react/types/css-prop" />
import React, { useState, useEffect, ReactElement, ReactNode } from 'react';
import {
	accordion,
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
	noJsInput,
	noJsButton,
} from './styles';
import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '../../foundations/src/accessibility';
import { Props } from '../../helpers';
import { SvgChevronDownSingle } from '../../icons';
export { accordionDefault } from '../../foundations/src/themes';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export interface AccordionProps extends Props {
	hideToggleLabel?: boolean;
	children: ReactElement[];
}

const Accordion = ({
	hideToggleLabel = false,
	children,
	cssOverrides,
	...props
}: AccordionProps) => {
	return (
		<div
			css={(theme) => [accordion(theme.accordion && theme), cssOverrides]}
			{...props}
		>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { hideToggleLabel });
			})}
		</div>
	);
};

interface AccordionRowProps extends Props {
	label: string;
	hideToggleLabel?: boolean;
	children: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NoJsRow = ({
	label,
	hideToggleLabel = false,
	children,
	onClick,
	cssOverrides,
	...props
}: AccordionRowProps) => {
	return (
		<div
			css={(theme) => [
				accordionRow(theme.accordion && theme),
				cssOverrides,
			]}
			{...props}
		>
			<label>
				<input type="checkbox" css={noJsInput} role="button" />
				<div
					css={(theme) => noJsButton(theme.accordion && theme)}
					data-target="label"
				>
					<strong css={labelText}>{label}</strong>
					<div data-target="toggle">
						<div
							css={[
								toggle,
								chevronIconDown,
								!hideToggleLabel ? toggleIconWithLabel : '',
							]}
							data-target="toggle-label-show"
						>
							<span
								css={[
									toggleLabel,
									hideToggleLabel ? visuallyHidden : '',
								]}
							>
								Show<span css={visuallyHidden}> more</span>
							</span>
							<SvgChevronDownSingle />
						</div>
						<div
							css={[
								toggle,
								chevronIconUp,
								!hideToggleLabel ? toggleIconWithLabel : '',
							]}
							data-target="toggle-label-hide"
						>
							<span
								css={[
									toggleLabel,
									hideToggleLabel ? visuallyHidden : '',
								]}
							>
								Hide
							</span>
							<SvgChevronDownSingle />
						</div>
					</div>
				</div>
				<div css={collapsedBody} data-target="body">
					<div>{children}</div>
				</div>
			</label>
		</div>
	);
};

const AccordionRow = ({
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

	return NoJsRow({
		label,
		hideToggleLabel,
		children,
	});
};

export { Accordion, AccordionRow };
