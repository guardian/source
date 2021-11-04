import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { Props } from '@guardian/src-helpers';
import {
	buttonStyles,
	labelStyles,
	mediumStyles,
	slimStyles,
	toggleSwitchStyles,
} from './styles';

export type Size = 'medium' | 'slim';

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
	 * use defaultChecked to indicate the whether the ToggleSwitch is checked intially.
	 */
	defaultChecked?: boolean;
	/**
	 * Appears to the right of the switch.
	 *
	 */
	label?: string;
	/**
	 * slim or medium toggle would be different in size and colors.
	 * slim has the size and look of an android toggle switch and
	 * medium has the ios switch look and feel.
	 *
	 */
	size?: Size;
	/**
	 * A callback function called when the component is checked or unchecked.
	 * Receives the click event as an argument.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/kitchen-source-react-components-development-kitchen-toggle-switch--playground) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/toggle-switch) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * Displays an on/off toggle switch. This toggle has default styling and can be used in andriod or ios.
 * To give it more custome styling cssOverride may be used.
 *
 */

export const ToggleSwitch = ({
	checked,
	label,
	defaultChecked,
	cssOverrides,
	size = 'medium',
	onClick = () => undefined,
	...props
}: ToggleSwitchProps): EmotionJSX.Element => {
	const isChecked = (): boolean => {
		if (checked != undefined) {
			return checked;
		}

		return !!defaultChecked;
	};

	const isSlim = size === 'slim';

	return (
		<div css={[toggleSwitchStyles, cssOverrides]} {...props}>
			<button
				css={[buttonStyles, isSlim ? slimStyles : mediumStyles]}
				role="switch"
				aria-checked={isChecked()}
				aria-labelledby="notify"
				onClick={onClick}
			></button>
			<label css={labelStyles} id="notify">
				{label}
			</label>
		</div>
	);
};
