import { css } from '@emotion/react';
import { textSans } from '@guardian/src-foundations/typography';
import type { Props } from '@guardian/src-helpers';
import { toggleSwitchStyles, slimStyles, mediumStyles } from './styles';

export type Size = 'medium' | 'slim';
export interface ToggleSwitchProps extends Props {
	/**
	 * different color theme is used whether the component is used
	 * in light or dark background
	 */
	isDarkBackground?: boolean;
	/**
	 * Whether the ToggleSwitch is checked. This is necessary when using the
	 * [controlled approach](https://reactjs.org/docs/forms.html#controlled-components)
	 * (recommended) to form state management.
	 *
	 * _Note: if you pass the `checked` prop, you MUST also pass an `onClick`
	 * handler, or the field will be rendered as read-only._
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
	 * When set to true, the toggle will be slim
	 *
	 */
	size?: Size;
	/**
	 * A callback function called when the component is opened or closed.
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
 * Displays an on/off toggle switch.
 *
 */

const labelStyles = (isDarkBackground: boolean) => css`
	${textSans.small()};
	display: inline-block;
	transform: translateY(2px);
	color: ${isDarkBackground ? 'rgb(255, 255, 255)' : 'rgb(18, 18, 18)'};
`;

export const ToggleSwitch = ({
	isDarkBackground = false,
	checked,
	label,
	defaultChecked,
	cssOverrides,
	size = 'medium',
	onClick = () => undefined,
	...props
}: ToggleSwitchProps) => {
	const isChecked = (): boolean => {
		if (checked != undefined) {
			return checked;
		}

		return !!defaultChecked;
	};

	const isSlim = size === 'slim';

	return (
		<div
			css={[
				toggleSwitchStyles(isDarkBackground),
				isSlim
					? slimStyles(isDarkBackground)
					: mediumStyles(isDarkBackground),
				cssOverrides,
			]}
			{...props}
		>
			<span>
				<button
					role="switch"
					aria-checked={isChecked()}
					aria-labelledby="notify"
					onClick={onClick}
				></button>
			</span>
			<span css={labelStyles(isDarkBackground)} id="notify">
				{label}
			</span>
		</div>
	);
};
