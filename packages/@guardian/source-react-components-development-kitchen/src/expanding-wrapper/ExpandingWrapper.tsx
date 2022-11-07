import { css } from '@emotion/react';
import { visuallyHidden } from '@guardian/source-foundations';
import { SvgMinus, SvgPlus } from '@guardian/source-react-components';
import type { FC } from 'react';
import { SkipTo } from './skipTo';
import {
	buttonIconStyles,
	collapsibleBodyStyles,
	containerStyles,
	extraStyles,
	overlayStyles,
	showHideLabelStyles,
} from './styles';
import type { ExpandingWrapperProps } from './types';

export const ExpandingWrapper: FC<ExpandingWrapperProps> = ({
	renderExtra,
	children,
	contentsLabel,
}) => {
	return (
		<>
			<div css={containerStyles}>
				{contentsLabel && (
					<SkipTo id={'after-collapsed'} label={`Skip ${contentsLabel}`} />
				)}
				<input
					type="checkbox"
					css={css`
						visibility: hidden;
						${visuallyHidden};
					`}
					id="expander-checkbox"
					name="expander-checkbox"
					tabIndex={-1}
					key="PinnedPostCheckbox"
				/>
				<div id="collapsible-body" css={collapsibleBodyStyles}>
					{children}
				</div>
				<div id="expander-overlay" css={overlayStyles} />
				<label
					aria-hidden={true}
					css={showHideLabelStyles}
					htmlFor="expander-checkbox"
					id="expander-button"
				>
					<>
						<span id="svgminus" css={buttonIconStyles}>
							<SvgMinus />
						</span>
						<span id="svgplus" css={buttonIconStyles}>
							<SvgPlus />
						</span>
					</>
				</label>
				{renderExtra && <span css={extraStyles}>{renderExtra()}</span>}
			</div>
			<span id="after-collapsed" />
		</>
	);
};
