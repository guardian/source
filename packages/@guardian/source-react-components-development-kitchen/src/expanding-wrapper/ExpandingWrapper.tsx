import { css } from '@emotion/react';
import { visuallyHidden } from '@guardian/source-foundations';
import { SvgMinus, SvgPlus } from '@guardian/source-react-components';
import { useState } from 'react';
import type { FC } from 'react';
import {
	buttonIconStyles,
	collapsibleBodyStyles,
	containerStyles,
	extraStyles,
	overlayStyles,
	showHideLabelStyles,
} from './styles';
import type { ExpandingWrapperProps } from './types';

export type { ExpandingWrapperProps } from './types';
import type { Theme } from './theme';

export const ExpandingWrapper: FC<ExpandingWrapperProps> = ({
	name,
	expandCallback,
	renderExtra,
	children,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div id="expander" css={(theme: Theme) => containerStyles(theme.expander)}>
			<input
				type="checkbox"
				css={css`
					${visuallyHidden};
				`}
				id="expander-checkbox"
				name="expander-checkbox"
				onChange={(e) => {
					expandCallback?.(e.target.checked);
					setIsExpanded(e.target.checked);
				}}
				aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${name && name}`}
			/>
			<div
				id="collapsible-body"
				css={collapsibleBodyStyles}
				aria-hidden={!isExpanded}
			>
				{children}
			</div>

			{!isExpanded && (
				<div
					id="expander-overlay"
					css={(theme: Theme) => overlayStyles(theme.expander)}
				/>
			)}
			{renderExtra && <span css={extraStyles}>{renderExtra()}</span>}
			<label
				aria-hidden={true}
				css={(theme: Theme) => showHideLabelStyles(theme.expander)}
				htmlFor="expander-checkbox"
				id="expander-button"
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
