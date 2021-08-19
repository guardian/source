import { Props } from '@guardian/src-helpers';
// @ts-ignore: React is needed by Chromatic for fragments for some reason
import React, {
	ChangeEventHandler,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useState,
} from 'react';
import {
	choiceCard,
	contentWrapper,
	contentWrapperLabelOnly,
	errorChoiceCard,
	input,
	tick,
	tickAnimation,
} from './styles';

export interface ChoiceCardProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Props {
	id: string;
	/**
	 * Appears inside the choice card
	 */
	label: ReactNode;
	value: string;
	/**
	 * Sets whether choice card is checked. Required when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
	 *
	 * **Note**: if you pass the `checked` prop, you must also pass an `onChange` handler, or the field will be rendered as read-only.
	 */
	checked?: boolean;
	/**
	 * Set the checked state in when using an [uncontrolled approach](https://reactjs.org/docs/uncontrolled-components.html).
	 */
	defaultChecked?: boolean;
	/**
	 * An icon that appears inside the button, alongside text
	 */
	icon?: ReactElement;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	/**
	 * @ignore passed down by the parent
	 */
	error?: boolean;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-choice-card-choicecardgroup) •
 * [Design System](https://theguardian.design/2a1e5182b/p/65ffe9-choice-card) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/core/components/choice-card) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-choice-card)
 *
 * Choice cards are a tactile, single or multi-select mechanism used to group related options.
 *
 */
export const ChoiceCard = ({
	id,
	label: labelContent,
	value,
	icon: iconSvg,
	checked,
	defaultChecked,
	cssOverrides,
	error,
	onChange,
	type = 'radio',
	...props
}: ChoiceCardProps) => {
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked;
		}

		return !!defaultChecked;
	};

	// prevent the animation firing if a Choice Card has been checked by default
	const [userChanged, setUserChanged] = useState(false);

	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
			<input
				css={(theme) => [
					input(theme.choiceCard && theme),
					userChanged ? tickAnimation : '',
					cssOverrides,
				]}
				id={id}
				value={value}
				aria-invalid={!!error}
				aria-checked={isChecked()}
				defaultChecked={
					defaultChecked != null ? defaultChecked : undefined
				}
				checked={checked != null ? isChecked() : undefined}
				onChange={(event) => {
					if (onChange) {
						onChange(event);
					}
					setUserChanged(true);
				}}
				type={type}
				{...props}
			/>
			<label
				css={(theme) => [
					choiceCard(theme.choiceCard && theme),
					error ? errorChoiceCard(theme.choiceCard && theme) : '',
				]}
				htmlFor={id}
			>
				<div
					css={[
						contentWrapper,
						!iconSvg ? contentWrapperLabelOnly : '',
					]}
				>
					{iconSvg ? iconSvg : ''}
					<div>{labelContent}</div>
				</div>
				<span css={(theme) => [tick(theme.checkbox && theme)]} />
			</label>
		</>
	);
};
