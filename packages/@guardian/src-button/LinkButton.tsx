import { AnchorHTMLAttributes } from 'react';
import { buttonContents } from './shared';
import { buttonStyles } from './styles';
import type { SharedButtonProps } from './types';

export interface LinkButtonProps
	extends SharedButtonProps,
		AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-button-linkbutton--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-button) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-button)
 *
 * Buttons enable users to make choices or perform actions.
 *
 */
export const LinkButton = ({
	priority,
	size,
	iconSide,
	icon: iconSvg,
	nudgeIcon,
	hideLabel,
	cssOverrides,
	children,
	...props
}: LinkButtonProps) => (
	<a
		css={buttonStyles({
			size,
			priority,
			icon: iconSvg,
			hideLabel,
			iconSide,
			nudgeIcon,
			cssOverrides,
		})}
		{...props}
	>
		{buttonContents({
			hideLabel,
			iconSvg,
			children,
		})}
	</a>
);
