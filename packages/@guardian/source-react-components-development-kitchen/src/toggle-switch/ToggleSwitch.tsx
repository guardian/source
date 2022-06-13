import type { SerializedStyles } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { descriptionId, generateSourceId } from '@guardian/source-foundations';
import type { Props } from '@guardian/source-react-components';
import { useEffect, useState } from 'react';
import {
	androidStyles,
	androidTooltipPosition,
	buttonStyles,
	iosStyles,
	iosTooltipPosition,
	labelStyles,
	tooltipStyles,
	webStyles,
	webTooltipPosition,
} from './styles';

export type Platform = 'android' | 'ios' | 'web';
export type LabelPosition = 'left' | 'right';

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
	 * Sets the toggle styling appropriate for each platform.
	 * The default platform is 'web'.
	 */
	platform?: Platform;
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
const getPlatformStyles = (platform: Platform): SerializedStyles => {
	switch (platform) {
		case 'android':
			return androidStyles;
		case 'ios':
			return iosStyles;
		case 'web':
			return webStyles;
	}
};

const getPlatformTooltipPosition = (platform: Platform) => {
	switch (platform) {
		case 'android':
			return androidTooltipPosition;
		case 'ios':
			return iosTooltipPosition;
		case 'web':
			return webTooltipPosition;
	}
};

export const ToggleSwitch = ({
	checked,
	id,
	label,
	labelPosition = 'right',
	defaultChecked,
	cssOverrides,
	platform = 'web',
	onClick = () => undefined,
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
	});

	if (isBrowser) {
		tooltiptext = 'tooltiptext';
	}

	return (
		<>
			<label id={labelId} css={[labelStyles, cssOverrides]} {...props}>
				{labelPosition === 'left' && label}
				<button
					id={buttonId}
					css={[
						buttonStyles(labelPosition),
						getPlatformStyles(platform),
					]}
					role="switch"
					aria-checked={isChecked()}
					aria-labelledby={labelId}
					onClick={onClick}
					className="tooltip"
				></button>
				{labelPosition === 'right' && label}
				<div
					className={tooltiptext}
					css={[tooltipStyles, getPlatformTooltipPosition(platform)]}
				>
					Sorry, your browser does not support JavaScript!
				</div>
			</label>
			<p>
				<div>Show key events only</div>
			</p>
		</>
	);
};
