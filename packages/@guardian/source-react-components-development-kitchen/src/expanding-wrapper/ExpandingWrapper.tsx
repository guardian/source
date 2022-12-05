import { css } from '@emotion/react';
import { visuallyHidden } from '@guardian/source-foundations';
import { SvgMinus, SvgPlus } from '@guardian/source-react-components';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import {
	buttonIconStyles,
	collapsibleBodyStyles,
	containerStyles,
	extraStyles,
	overlayStyles,
	showHideLabelStyles,
} from './styles';
import type { Theme } from './theme';
import type { ExpandingWrapperProps, TabbableElementType } from './types';

export type { ExpandingWrapperProps } from './types';

const setTabIndex = (name: string, isExpanded: boolean) => {
	const collapsibleBody = document.getElementById(
		`expander-${name}__collapsible-body`,
	);
	if (!collapsibleBody) return;

	const tabbableElements: TabbableElementType[] = Array.from(
		collapsibleBody.querySelectorAll('input,textarea,select,button,a'),
	);
	tabbableElements.forEach((element: TabbableElementType) => {
		element.tabIndex = isExpanded ? 0 : -1;
	});
};

export const ExpandingWrapper: FC<ExpandingWrapperProps> = ({
	name,
	expandCallback,
	renderExtra,
	disableTabbingWhenCollapsed = true,
	children,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		disableTabbingWhenCollapsed && setTabIndex(name, isExpanded);
	}, [disableTabbingWhenCollapsed, isExpanded]);

	return (
		<div
			id={`expander-${name}`}
			css={(theme: Theme) => containerStyles(theme.expander)}
		>
			<input
				type="checkbox"
				css={css`
					${visuallyHidden};
				`}
				className="expander__checkbox"
				id={`expander-checkbox-${name}`}
				onChange={(e) => {
					expandCallback?.(e.target.checked);
					setIsExpanded(e.target.checked);
				}}
				aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${name && name}`}
			/>
			<div
				className="expander__collapsible-body"
				id={`expander-${name}__collapsible-body`}
				css={collapsibleBodyStyles}
				aria-hidden={!isExpanded}
			>
				{children}
			</div>

			{!isExpanded && (
				<div css={(theme: Theme) => overlayStyles(theme.expander)} />
			)}
			{renderExtra && <span css={extraStyles}>{renderExtra()}</span>}
			<label
				aria-hidden={true}
				css={(theme: Theme) => showHideLabelStyles(theme.expander)}
				htmlFor={`expander-checkbox-${name}`}
			>
				{isExpanded ? (
					<>
						<span id="svgminus" css={buttonIconStyles}>
							<SvgMinus />
						</span>
						Show Less
					</>
				) : (
					<>
						<span id="svgplus" css={buttonIconStyles}>
							<SvgPlus />
						</span>
						Show More
					</>
				)}
			</label>
		</div>
	);
};
