import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { buttonStyles, buttonContents } from './shared';
import type {
	SharedButtonProps,
	ButtonPriority,
	Size,
	IconSide,
} from './types';

export interface ButtonProps
	extends SharedButtonProps,
		ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-button-button--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/button) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-button)
 *
 * Buttons enable users to make choices or perform actions.
 *
 */
export const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	hideLabel,
	nudgeIcon,
	type = 'button',
	cssOverrides,
	children,
	...props
}: ButtonProps) => (
	<button
		css={buttonStyles({
			size,
			priority,
			icon: iconSvg,
			hideLabel,
			iconSide,
			nudgeIcon,
			cssOverrides,
		})}
		type={type}
		{...props}
	>
		{buttonContents({
			hideLabel,
			iconSvg,
			children,
		})}
	</button>
);
