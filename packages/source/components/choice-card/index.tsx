///<reference types="@emotion/react/types/css-prop" />
import React, {
	ReactNode,
	ReactElement,
	useState,
	InputHTMLAttributes,
	ChangeEventHandler,
} from 'react';
import { SerializedStyles } from '@emotion/react';
import { Legend } from '@guardian/src-label';
import {
	fieldset,
	flexContainer,
	gridContainer,
	gridColumns,
	input,
	tickAnimation,
	choiceCard,
	tick,
	errorChoiceCard,
	contentWrapper,
	contentWrapperLabelOnly,
} from './styles';
import { InlineError } from '@guardian/src-user-feedback';
import { Props } from '@guardian/src-helpers';
import {
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';

export { choiceCardDefault } from '@guardian/src-foundations/themes';

export type Columns = 2 | 3 | 4 | 5;

interface ChoiceCardGroupProps extends Props {
	id?: string;
	name: string;
	label?: string;
	supporting?: string;
	multi?: boolean;
	error?: string;
	columns?: Columns;
	children: JSX.Element | JSX.Element[];
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

const ChoiceCardGroup = ({
	id,
	name,
	label,
	supporting,
	multi,
	error,
	columns,
	cssOverrides,
	children,
	...props
}: ChoiceCardGroupProps) => {
	const groupId = id || generateSourceId();
	return (
		<fieldset css={[fieldset, cssOverrides]} id={groupId} {...props}>
			{label ? <Legend text={label} supporting={supporting} /> : ''}
			{typeof error === 'string' && (
				<InlineError id={descriptionId(groupId)}>{error}</InlineError>
			)}
			<div
				css={
					columns
						? [gridContainer, gridColumns[columns]]
						: flexContainer
				}
			>
				{React.Children.map(children, (child) => {
					return React.cloneElement(
						child,
						Object.assign(
							{
								type: multi ? 'checkbox' : 'radio',
							},
							error
								? {
										error: true,
										'aria-describedby': descriptionId(
											groupId,
										),
								  }
								: {},
							{
								name,
							},
						),
					);
				})}
			</div>
		</fieldset>
	);
};

interface ChoiceCardProps extends InputHTMLAttributes<HTMLInputElement>, Props {
	id: string;
	label: ReactNode;
	value: string;
	supporting?: ReactNode;
	icon?: ReactElement;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	error: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

const ChoiceCard = ({
	id,
	label: labelContent,
	value,
	icon: iconSvg,
	checked,
	defaultChecked,
	cssOverrides,
	error,
	onChange,
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
				aria-invalid={error}
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

const choiceCardDefaultProps = {
	disabled: false,
	type: 'radio',
	error: false,
};

ChoiceCard.defaultProps = { ...choiceCardDefaultProps };

export { ChoiceCardGroup, ChoiceCard };
