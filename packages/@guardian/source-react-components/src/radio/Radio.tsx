import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Props } from '../@types/types';
import {
	label,
	labelText,
	labelTextWithSupportingText,
	labelWithSupportingText,
	radio,
	supportingText,
} from './styles';

const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean;
	children: ReactNode;
}) => {
	return (
		<div
			css={(theme) => [
				hasSupportingText ? labelTextWithSupportingText : '',
				labelText(theme.radio),
			]}
			className="src-radio-label-text"
		>
			{children}
		</div>
	);
};

const SupportingText = ({ children }: { children: ReactNode }) => {
	return <div css={(theme) => supportingText(theme.radio)}>{children}</div>;
};

export interface RadioProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Props {
	/**
	 * Whether radio button is checked. This is necessary when using the
	 * [controlled approach](https://reactjs.org/docs/forms.html#controlled-components)
	 * (recommended) to form state management.
	 *
	 * _Note: if you pass the `checked` prop, you MUST also pass an `onChange`
	 * handler, or the field will be rendered as read-only._
	 */
	checked?: boolean;
	/**
	 * When using the [uncontrolled approach](https://reactjs.org/docs/uncontrolled-components.html),
	 * use defaultChecked to indicate the initially checked button.
	 */
	defaultChecked?: boolean;
	/**
	 * Appears to the right of the radio button. If a visible label is
	 * undesirable (e.g. for layout reasons) use `aria-label` instead.
	 *
	 * If label is omitted, supporting text will not appear either.
	 */
	label?: string | ReactNode;
	/**
	 * Additional text or a component that appears below the label
	 */
	supporting?: string | ReactNode;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-radio-radio--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-radio) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-radio)
 *
 * Radio buttons allow users to make a single selection from a set of options.
 *
 * The following themes are supported: `default`, `brand`
 */
export const Radio = ({
	label: labelContent,
	value,
	supporting,
	checked,
	defaultChecked,
	cssOverrides,
	...props
}: RadioProps) => {
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked;
		}

		return !!defaultChecked;
	};
	const radioControl = (
		<input
			type="radio"
			css={(theme) => [radio(theme.radio), cssOverrides]}
			value={value}
			aria-checked={isChecked()}
			defaultChecked={defaultChecked != null ? defaultChecked : undefined}
			checked={checked != null ? isChecked() : undefined}
			{...props}
		/>
	);

	const labelledRadioControl = (
		<label
			css={(theme) => [
				label(theme.radio),
				supporting ? labelWithSupportingText : '',
			]}
		>
			{radioControl}
			{supporting ? (
				<div>
					<LabelText hasSupportingText={true}>
						{labelContent}
					</LabelText>
					<SupportingText>{supporting}</SupportingText>
				</div>
			) : (
				<LabelText>{labelContent}</LabelText>
			)}
		</label>
	);

	return (
		<>{labelContent || supporting ? labelledRadioControl : radioControl}</>
	);
};
