import type { ReactElement } from 'react';
import type { Props } from '../@types/Props';

export type ButtonPriority = 'primary' | 'secondary' | 'tertiary' | 'subdued';
export type IconSide = 'left' | 'right';
export type Size = 'default' | 'small' | 'xsmall';

export interface SharedButtonProps extends Props {
	/**
	 * Informs users of how important an action is
	 */
	priority?: ButtonPriority;
	/**
	 * Reflects the prominence of the action
	 */
	size?: Size;
	/**
	 * An icon that appears inside the button, alongside text
	 */
	icon?: ReactElement;
	/**
	 * The side of the button on which the icon appears
	 */
	iconSide?: IconSide;
	/**
	 * Whether to hide the text label visually. It is only appropriate to set
	 * this flag if an icon is passed. The text label will still be read out by
	 * screen readers.
	 */
	hideLabel?: boolean;
	/**
	 * When set, the icon (if visible) will move slightly to the right on hover.
	 */
	nudgeIcon?: boolean;
	/**
	 * When true, a loading spinner will appear to the left of the button content.
	 * Any icon present will be replaced by the spinner.
	 */
	isLoading?: boolean;
	/**
	 * Adds the ability to provide a custom loading announcement for users who use a
	 * screen reader. Defaults to "Loading".
	 */
	loadingAnnouncement?: string;
}
