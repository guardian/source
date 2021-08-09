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
	showBackToTop?: boolean;
}

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
