import { ReactNode, InputHTMLAttributes } from 'react';
import {
	label,
	labelWithSupportingText,
	checkbox,
	supportingText,
	tick,
	tickWithLabelText,
	tickWithSupportingText,
	errorCheckbox,
} from './styles';
import { LabelText } from './LabelText';
import { SupportingText } from './SupportingText';
import { Props } from '@guardian/src-helpers';
export interface CheckboxProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Props {
	/**
	 * Whether checkbox is checked. This is necessary when using the
	 * [controlled approach](https://reactjs.org/docs/forms.html#controlled-components)
	 * (recommended) to form state management.
	 *
	 * _Note: if you pass the `checked` prop, you MUST also pass an `onChange`
	 * handler, or the field will be rendered as read-only._
	 */
	checked?: boolean;
	/**
	 * When using the [uncontrolled approach](https://reactjs.org/docs/uncontrolled-components.html),
	 * use defaultChecked to indicate the whether the checkbox is checked intially.
	 */
	defaultChecked?: boolean;
	/**
	 * Appears to the right of the checkbox. If a visible label is
	 * undesirable (e.g. for layout reasons) use `aria-label` instead.
	 *
	 * If label is omitted, supporting text will not appear either.
	 */
	label?: ReactNode;
	/**
	 * Additional text or a component that appears below the label
	 */
	supporting?: ReactNode;
	/**
	 * Whether checkbox is in an indeterminate ("mixed") state
	 */
	indeterminate?: boolean;
	/**
	 * @ignore passed down by the parent
	 */
	error?: boolean;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-checkbox-checkbox--playground) •
 * [Design System](https://theguardian.design/2a1e5182b/p/466fad-checkbox/b/33fc2f) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-checkbox) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-checkbox)
 *
 * Checkboxes allow users to select multiple options from a list of individual
 * items or to indicate agreement of terms and  services.
 *
 * The following themes are supported: `default`, `brand`
 */
export const Checkbox = ({
	label: labelContent,
	checked,
	supporting,
	defaultChecked,
	error,
	indeterminate,
	cssOverrides,
	...props
}: CheckboxProps) => {
	const ariaChecked = (): boolean | 'mixed' => {
		// Note: the indeterminate prop takes precedence over the checked prop
		if (indeterminate) {
			return 'mixed';
		}

		if (checked != null) {
			return checked;
		}

		return !!defaultChecked;
	};
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked;
		}

		return !!defaultChecked;
	};
	const setIndeterminate = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = !!indeterminate;
		}
	};

	const box = (
		<>
			<input
				type="checkbox"
				css={(theme) => [
					checkbox(theme.checkbox),
					error ? errorCheckbox(theme.checkbox) : '',
					cssOverrides,
				]}
				aria-invalid={!!error}
				aria-checked={ariaChecked()}
				ref={setIndeterminate}
				defaultChecked={
					defaultChecked != null ? defaultChecked : undefined
				}
				checked={checked != null ? isChecked() : undefined}
				{...props}
			/>
			<span
				css={(theme) => [
					tick(theme.checkbox),
					labelContent || supporting ? tickWithLabelText : '',
					supporting ? tickWithSupportingText : '',
				]}
			/>
		</>
	);

	const labelledBox = (
		<label
			css={(theme) => [
				label(theme.checkbox),
				supporting ? labelWithSupportingText : '',
			]}
		>
			{box}
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

	return <>{labelContent || supportingText ? labelledBox : box}</>;
};
