import type { ReactElement, ReactNode } from 'react';
import type { Props } from '../@types/Props';

export type LinkPriority = 'primary' | 'secondary';

export type IconSide = 'left' | 'right';

export interface SharedLinkProps extends Props {
	/**
	 * Informs users of how important a link is
	 */
	priority?: LinkPriority;
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
