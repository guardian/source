import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import { SvgChevronDownSingle } from '../../vendor/icons/SvgChevronDownSingle';
import type { Theme } from '../@types/Theme';
import type { AccordionRowProps } from './AccordionRow';
import {
	accordionRow,
	chevronIconDown,
	chevronIconUp,
	collapsedBody,
	labelText,
	noJsButton,
	noJsInput,
	toggle,
	toggleIconWithLabel,
	toggleLabel,
} from './styles';

const visuallyHidden = css`
	${_visuallyHidden}
`;

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-accordion--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/38c5aa-accordion/b/92b71e) •
 * [GitHub](https://github.com/guardian/source/blob/main/packages/@guardian/source-react-components/src/accordion/AccordionRowNoJS.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 */
export const AccordionRowNoJS = ({
	label,
	hideToggleLabel = false,
	children,
	cssOverrides,
	...props
}: Omit<AccordionRowProps, 'onClick'>): EmotionJSX.Element => {
	return (
		<div
			css={(theme: Theme) => [accordionRow(theme.accordion), cssOverrides]}
			{...props}
		>
			<label>
				<input type="checkbox" css={noJsInput} role="button" />
				<div
					css={(theme: Theme) => noJsButton(theme.accordion)}
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
							<span css={[toggleLabel, hideToggleLabel ? visuallyHidden : '']}>
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
							<span css={[toggleLabel, hideToggleLabel ? visuallyHidden : '']}>
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
