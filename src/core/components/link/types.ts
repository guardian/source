import { ReactElement, ReactNode } from 'react';
import { Props } from '@guardian/src-helpers';

export type LinkPriority = 'primary' | 'secondary';

export type IconSide = 'left' | 'right';

export interface SharedLinkProps extends Props {
	/**
	 * Informs users of how important a link is
	 */
	priority?: LinkPriority;
	/**
	 * Whether link is subdued (no underline)
	 */
	subdued?: boolean;
	/**
	 * An icon that appears in the link, alongside text
	 */
	icon?: ReactElement;
	/**
	 * The side of the link on which the icon appears
	 */
	iconSide?: IconSide;
	children?: ReactNode;
}
