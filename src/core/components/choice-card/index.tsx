import React, { ReactNode } from "react"
import { fieldset, input, choiceCard } from "./styles"
import { Props } from "@guardian/src-helpers"

export { choiceCardDefault } from "@guardian/src-foundations/themes"

interface ChoiceCardGroupProps extends Props {
	name: string
	multi?: boolean
	error?: string
	children: JSX.Element | JSX.Element[]
}

const ChoiceCardGroup = ({
	name,
	multi,
	error,
	cssOverrides,
	children,
	...props
}: ChoiceCardGroupProps) => {
	// TODO: This is currently a div instead of a fieldset due to a Chrome / Safari
	// bug that prevents flexbox model working on fieldset elements
	// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
	return (
		<div css={[fieldset, cssOverrides]} {...props}>
			{React.Children.map(children, child => {
				return React.cloneElement(
					child,
					Object.assign(
						{ error: !!error, type: multi ? "checkbox" : "radio" },
						{
							name,
						},
					),
				)
			})}
		</div>
	)
}

interface ChoiceCardProps extends Props {
	id: string
	label: ReactNode
	value: string
	supporting?: ReactNode
	checked?: boolean
	error: boolean
}

const ChoiceCard = ({
	id,
	label: labelContent,
	value,
	checked,
	cssOverrides,
	error,
	...props
}: ChoiceCardProps) => {
	const setChoiceCardState = (el: HTMLInputElement | null) => {
		if (el && checked != null) {
			el.checked = checked
		}
	}

	return (
		<>
			<input
				css={theme => [input(theme.choiceCard && theme), cssOverrides]}
				id={id}
				value={value}
				aria-invalid={error}
				ref={setChoiceCardState}
				{...props}
			/>
			<label
				css={theme => [choiceCard(theme.choiceCard && theme)]}
				htmlFor={id}
			>
				{labelContent}
			</label>
		</>
	)
}

const choiceCardDefaultProps = {
	disabled: false,
	type: "radio",
	defaultChecked: false,
	error: false,
}

ChoiceCard.defaultProps = { ...choiceCardDefaultProps }

export { ChoiceCardGroup, ChoiceCard }
