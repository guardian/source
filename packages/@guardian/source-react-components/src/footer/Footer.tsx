import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';
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
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-footer-footer--playground) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-footer) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-footer)
 *
 * 🛠 This component is [in development](https://www.theguardian.design/2a1e5182b/p/99cfad-component-status/t/06d689).
 */
export const Footer = ({
	showBackToTop,
	children,
	cssOverrides,
	...props
}: FooterProps) => {
	return (
		<footer
			css={(theme) => [footer(theme.footer), cssOverrides]}
			{...props}
		>
			<div
				css={[
					linksWrapper,
					showBackToTop
						? linksWrapperSpaceWithBackToTop
						: linksWrapperSpace,
				]}
			>
				<div css={(theme) => links(theme.footer)}>{children}</div>
				{showBackToTop ? BackToTop : ''}
			</div>
			<small
				css={[copyright, showBackToTop ? copyrightExtraPadding : '']}
			>
				&copy; 2021 Guardian News and Media Limited or its affiliated
				companies. All rights reserved.
			</small>
		</footer>
	);
};
