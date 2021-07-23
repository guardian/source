import { Props } from '@guardian/src-helpers';
import React, { ReactElement } from 'react';
import { accordion } from './styles';

export interface AccordionProps extends Props {
	/**
	 * Determine whether to display the "show" and "hide" labels that toggle the collapsing and expanding of the menu. When set to `true`, the label will no longer appear. It may be useful to toggle this flag when there is limited space.
	 *
	 * _Note: the up or down chevron icon always appears._
	 */
	hideToggleLabel?: boolean;
	children: ReactElement[];
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/story/accordion) •
 * [Design System](https://theguardian.design/2a1e5182b/p/38c5aa-accordion/b/92b71e) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/accordion) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-accordion)
 */
export const Accordion = ({
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
