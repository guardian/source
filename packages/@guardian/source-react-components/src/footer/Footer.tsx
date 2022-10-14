import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
import type { Theme } from '../@types/Theme';
import { BackToTop } from './BackToTop';
import {
	copyright,
	copyrightExtraPadding,
	footer,
	links,
	linksWrapper,
	linksWrapperSpace,
	linksWrapperSpaceWithBackToTop,
} from './styles';

export interface FooterProps extends HTMLAttributes<HTMLElement>, Props {
	/**
	 * Whether the "Back to top" link is visible in the footer.
	 */
	showBackToTop?: boolean;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-footer--playground) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/footer/Footer.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * 🛠 This component is [in development](https://www.theguardian.design/2a1e5182b/p/99cfad-component-status/t/06d689).
 */
export const Footer = ({
	showBackToTop,
	children,
	cssOverrides,
	...props
}: FooterProps): EmotionJSX.Element => {
	return (
		<footer
			css={(theme: Theme) => [footer(theme.footer), cssOverrides]}
			{...props}
		>
			<div
				css={[
					linksWrapper,
					showBackToTop ? linksWrapperSpaceWithBackToTop : linksWrapperSpace,
				]}
			>
				<div css={(theme: Theme) => links(theme.footer)}>{children}</div>
				{showBackToTop ? BackToTop : ''}
			</div>
			<small css={[copyright, showBackToTop ? copyrightExtraPadding : '']}>
				&copy; 2021 Guardian News and Media Limited or its affiliated companies.
				All rights reserved.
			</small>
		</footer>
	);
};
