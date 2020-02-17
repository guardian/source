import React, { ReactNode } from "react"
import { fieldset, input, choiceCard } from "./styles"
export { choiceCardDefault } from "@guardian/src-foundations/themes"

const ChoiceCardGroup = ({
	name,
	error,
	children,
	...props
}: {
	name: string
	error?: string
	children: JSX.Element | JSX.Element[]
}) => {
	// TODO: This is currently a div instead of a fieldset due to a Chrome / Safari
	// bug that prevents flexbox model working on fieldset elements
	// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
	return (
		<div css={[fieldset]} {...props}>
			{React.Children.map(children, child => {
				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
					}),
				)
			})}
		</div>
	)
}

const ChoiceCard = ({
	id,
	label: labelContent,
	value,
	checked,
	error,
	...props
}: {
	id: string
	label: ReactNode
	value: string
	supporting?: ReactNode
	checked?: boolean
	error: boolean
}) => {
	const setChoiceCardState = (el: HTMLInputElement | null) => {
		if (el && checked != null) {
			el.checked = checked
		}
	}

	return (
		<>
			<input
				css={theme => [input(theme.choiceCard && theme)]}
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
