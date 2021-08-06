import { ButtonHTMLAttributes } from 'react';
import { SharedLinkProps } from './types';
import { linkStyles } from './styles';
import { linkContents } from './shared';

export interface ButtonLinkProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		SharedLinkProps {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-link-button-link--demo) •
 * [Design System](https://theguardian.design/2a1e5182b/p/43c26b-link/b/048fd1) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/link) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-link)
 *
 * Links are used as navigational aids. They may appear inline in a paragraph, as items in a list or as stand alone text elements.
 *
 * The following themes are supported: `light`, `brand`, `brandYellow`
 */
export const ButtonLink = ({
	priority = 'primary',
	subdued: isSubdued,
	icon: iconSvg,
	iconSide = 'left',
	cssOverrides,
	children,
	...props
}: ButtonLinkProps) => {
	return (
		<button
			css={linkStyles({
				isButton: true,
				priority,
				isSubdued,
				iconSvg,
				iconSide,
				cssOverrides,
			})}
			{...props}
		>
			{linkContents({ children, iconSvg, iconSide })}
		</button>
	);
};
