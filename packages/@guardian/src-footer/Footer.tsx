import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import {
	footer,
	copyright,
	copyrightExtraPadding,
	links,
	linksWrapper,
	linksWrapperSpace,
	linksWrapperSpaceWithBackToTop,
} from './styles';
import { BackToTop } from './BackToTop';

export interface FooterProps extends HTMLAttributes<HTMLElement>, Props {
	/**
	 * Whether the "Back to top" link is visible in the footer.
	 */
	showBackToTop?: boolean;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-footer-footer--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/12ce79--footer/b/09ee0e) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/footer) •
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
			css={(theme) => [footer(theme.footer && theme), cssOverrides]}
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
				<div css={(theme) => links(theme.footer && theme)}>
					{children}
				</div>
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
