import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { brand } from '@guardian/source-foundations';
import { BackToTop, Container } from '@guardian/source-react-components';
import type { ReactNode } from 'react';
import {
	backToTopStyles,
	contentWrapperStyles,
	copyrightStyles,
	footer,
} from './footerWithContentsStyles';

export interface FooterWithContentsProps {
	children: ReactNode;
	/**
	 * A container component that matches the type signature of the Source Container.
	 * Use where different internal padding or other behaviour needs to be applied to match an existing layout.
	 */
	ContainerComponent?: typeof Container;
}

const footerContainerProps = {
	sideBorders: true,
	borderColor: brand[600],
};

export const FooterWithContents = ({
	children,
	ContainerComponent = Container,
}: FooterWithContentsProps): EmotionJSX.Element => {
	return (
		<footer css={footer}>
			<ContainerComponent {...footerContainerProps}>
				<div css={contentWrapperStyles}>
					{children}
					<div css={backToTopStyles}>{BackToTop}</div>
				</div>
			</ContainerComponent>
			<ContainerComponent
				{...footerContainerProps}
				topBorder={true}
				sideBorders={false}
			>
				<small css={copyrightStyles}>
					© {new Date().getFullYear()} Guardian News & Media Limited or its
					affiliated companies. All rights reserved.
				</small>
			</ContainerComponent>
		</footer>
	);
};
