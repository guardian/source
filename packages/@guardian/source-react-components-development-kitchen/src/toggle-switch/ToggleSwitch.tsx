import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { ArticleFormat } from '@guardian/libs';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import { useEffect, useState } from 'react';
import type { Props } from '../../../source-react-components/src/@types/Props';
import {
	buttonStyles,
	labelBorderStyles,
	labelStyles,
	toggleStyles,
	tooltipStyles,
} from './styles';

export type LabelPosition = 'left' | 'right';
export type ToggleSwitchFontWeight = 'regular' | 'bold';
export type ToggleSwitchFontSize = 'small' | 'medium';

export interface ToggleSwitchProps extends Props {
	/**
	 * Whether the ToggleSwitch is checked. This is necessary when using the
	 * [controlled approach](https://reactjs.org/docs/forms.html#controlled-components)
	 * (recommended) to form state management.
	 *
	 * Note: if you pass the `checked` prop, you MUST also pass an `onClick`
	 * handler, or the field will be rendered as read-only.
	 */
	checked?: boolean;
	/**
	 * When using the [uncontrolled approach](https://reactjs.org/docs/uncontrolled-components.html),
	 * use defaultChecked to indicate the whether the ToggleSwitch is checked initially.
	 */
	defaultChecked?: boolean;
	/**
	 * Optional Format prop, when provided this renders the toggle with a theme colored tick and light background track
	 */
	format?: ArticleFormat;
	/**
	 * Optional Id for the switch. Defaults to a generated indexed Source ID e.g. "src-component-XXX}"
	 */
	id?: string;
	/**
	 * Appears to the right of the switch by default.
	 */
	label?: string;
	/**
	 * Which side of the switch the label will appear on.
	 */
	labelPosition?: LabelPosition;
	/**
	 * Displays a border above the toggle switch label and toggle.
	 */
	labelBorder?: boolean;
	/**
	 * Sets the font weight to either 'regular' or 'bold'.
	 * Note this does not take all font weights, only 'regular' and 'bold'.
	 */
	fontWeight?: ToggleSwitchFontWeight;
	/**
	 * Sets the font weight to either 'regular' or 'bold'.
	 * Note this does not take all font sizes, only 'small' and 'medium'.
	 */
	fontSize?: ToggleSwitchFontSize;
	/**
	 * A callback function called when the component is checked or unchecked.
	 * Receives the click event as an argument.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-development-kitchen-toggle-switch--playground) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/toggle-switch) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * Displays an on/off toggle switch. This toggle has default styling and can be used on android, ios or web.
 * These styles are driven by the 'platform' prop.
 * To give it more custom styling cssOverride may be used.
 *
 */
export const ToggleSwitch = ({
	checked,
	id,
	fontWeight = 'regular',
	fontSize = 'small',
	format,
	label,
	labelBorder = false,
	labelPosition = 'right',
	defaultChecked,
	cssOverrides,
	onClick,
	...props
}: ToggleSwitchProps): EmotionJSX.Element => {
	const buttonId = id ?? generateSourceId();
	const labelId = descriptionId(buttonId);
	const [isBrowser, setIsBrowser] = useState(false);
	let tooltiptext = '';

	const isChecked = (): boolean => {
		if (checked != undefined) {
			return checked;
		}

		return !!defaultChecked;
	};

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (!isBrowser) {
		tooltiptext = 'tooltiptext';
	}

	return (
		<label
			id={labelId}
			css={[
				labelStyles(fontSize, fontWeight, format),
				labelBorder && labelBorderStyles(format),
				cssOverrides,
			]}
			{...props}
		>
			{labelPosition === 'left' && label}
			<button
				id={buttonId}
				css={[buttonStyles(labelPosition), toggleStyles(format)]}
				role="switch"
				aria-checked={isChecked()}
				aria-labelledby={labelId}
				onClick={onClick}
			></button>
			{labelPosition === 'right' && label}
			<div className={tooltiptext} css={tooltipStyles}>
				<span>Please turn on JavaScript to use this feature</span>
			</div>
		</label>
	);
};
