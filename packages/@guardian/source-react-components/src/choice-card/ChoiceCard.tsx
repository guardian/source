import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type {
	ChangeEventHandler,
	InputHTMLAttributes,
	ReactElement,
} from 'react';
import { useState } from 'react';
import type { Props } from '../@types/Props';
import type { Theme } from '../@types/Theme';
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
	label: React.ReactNode;
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
	/**
	 * The type of input you want
	 */
	type?: 'radio' | 'checkbox';
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-choicecard) •
 * [Design System](https://theguardian.design/2a1e5182b/p/65ffe9-choice-card) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components/src/choice-card/ChoiceCard.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
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
}: ChoiceCardProps): EmotionJSX.Element => {
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
			<input
				css={(theme: Theme) => [
					input(theme.choiceCard),
					userChanged ? tickAnimation : '',
					cssOverrides,
				]}
				id={id}
				value={value}
				aria-invalid={!!error}
				defaultChecked={defaultChecked != null ? defaultChecked : undefined}
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
				css={(theme: Theme) => [
					choiceCard(theme.choiceCard),
					error ? errorChoiceCard(theme.choiceCard) : '',
				]}
				htmlFor={id}
			>
				<div css={[contentWrapper, !iconSvg ? contentWrapperLabelOnly : '']}>
					{iconSvg ? iconSvg : ''}
					<div>{labelContent}</div>
				</div>
				<span css={(theme: Theme) => [tick(theme.choiceCard)]} />
			</label>
		</>
	);
};
