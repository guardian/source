import { css } from '@emotion/react';
import { ArticlePillar, ArticleTheme } from '@guardian/libs';
import { textSans } from '@guardian/src-foundations/typography';
import type { Props } from '@guardian/src-helpers';
import { decideBackground, alertSwitchStyles } from './styles';

export interface AlertSwitchProps extends Props {
	/**
	 * A theme object denoting the style of the button using the enums
	 * available from [@guardian/libs](https://github.com/guardian/libs/blob/main/src/format.ts).
	 *
	 * For example:
	 *
	 * ```ts
	 *   Pillar.News,
	 * ```
	 */
	theme?: ArticleTheme;
	/**
	 * Whether checkbox is checked. This is necessary when using the
	 * [controlled approach](https://reactjs.org/docs/forms.html#controlled-components)
	 * (recommended) to form state management.
	 *
	 * _Note: if you pass the `checked` prop, you MUST also pass an `onClick`
	 * handler, or the field will be rendered as read-only._
	 */
	checked?: boolean;
	/**
	 * When using the [uncontrolled approach](https://reactjs.org/docs/uncontrolled-components.html),
	 * use defaultChecked to indicate the whether the checkbox is checked intially.
	 */
	defaultChecked?: boolean;
	/**
	 * Appears to the right of the switch.
	 *
	 */
	label?: string;
	/**
	 * A callback function called when the component is opened or closed.
	 * Receives the click event as an argument.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/kitchen-source-react-components-development-kitchen-alert-switch--playground) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/alert-switch) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * Displays an on/off alert switch.
 *
 */

const labelStyles = css`
	${textSans.small()};
`;

export const AlertSwitch = ({
	theme = ArticlePillar.News,
	checked,
	label,
	defaultChecked,
	cssOverrides,
	onClick = () => undefined,
	...props
}: AlertSwitchProps) => {
	const isChecked = (): boolean => {
		if (checked != undefined) {
			return checked;
		}

		return !!defaultChecked;
	};

	const background = decideBackground(theme);

	return (
		<div css={[alertSwitchStyles(background), cssOverrides]}>
			<button
				role="switch"
				aria-checked={isChecked()}
				aria-labelledby="notify"
				onClick={onClick}
			></button>
			<span css={labelStyles} id="notify">
				{label}
			</span>
		</div>
	);
};
