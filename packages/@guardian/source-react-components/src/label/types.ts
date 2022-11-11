import type { SerializedStyles } from '@emotion/react';
import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
import type { Props } from '../@types/Props';

export interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement>,
		Props {
	/**
	 * The label text
	 */
	text: string;
	/**
	 * Additional text or component that appears below the label
	 */
	supporting?: string;
	/**
	 * Adds the word "Optional" after the label
	 */
	optional?: boolean;
	/**
	 * Visually hides the label
	 */
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children?: ReactNode;
	/**
	 * Should the theme change to dark when the user has prefers-color-scheme: dark set?
	 * Defaults to false for backwards compatibility
	 */
	supportDarkMode?: boolean;
}

export interface LegendProps extends HTMLAttributes<HTMLLegendElement>, Props {
	/**
	 * The label text
	 */
	text: string;
	/**
	 * Additional text or component that appears below the label
	 */
	supporting?: string | JSX.Element;
	/**
	 * Adds the word "Optional" after the label
	 */
	optional?: boolean;
	/**
	 * Visually hides the label
	 */
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	/**
	 * Should the theme change to dark when the user has prefers-color-scheme: dark set?
	 * Defaults to false for backwards compatibility
	 */
	supportDarkMode?: boolean;
}
