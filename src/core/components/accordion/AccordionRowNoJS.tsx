import { SvgChevronDownSingle } from '@guardian/src-icons';
import {
	accordionRow,
	labelText,
	toggle,
	toggleLabel,
	chevronIconUp,
	chevronIconDown,
	toggleIconWithLabel,
	collapsedBody,
	noJsInput,
	noJsButton,
} from './styles';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
import { AccordionRowProps } from './AccordionRow';
import { css } from '@emotion/react';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const AccordionRowNoJS = ({
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
