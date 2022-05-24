import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ButtonHTMLAttributes } from 'react';
import { linkContents } from './shared';
import { linkStyles } from './styles';
import type { SharedLinkProps } from './types';

export interface ButtonLinkProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		SharedLinkProps {}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-buttonlink--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/43c26b-link/b/048fd1) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/link/ButtonLink.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Links are used as navigational aids. They may appear inline in a paragraph, as items in a list or as stand alone text elements.
 *
 * The following themes are supported: `light`, `brand`, `brandYellow`
 */
export const ButtonLink = ({
	priority = 'primary',
	icon: iconSvg,
	iconSide = 'left',
	cssOverrides,
	children,
	...props
}: ButtonLinkProps): EmotionJSX.Element => {
	return (
		<button
			css={linkStyles({
				isButton: true,
				priority,
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
