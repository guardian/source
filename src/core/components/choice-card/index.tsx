import React, { ReactNode } from "react"
import {
	fieldset,
	flexContainer,
	groupLabel,
	input,
	choiceCard,
	groupLabelSupporting,
} from "./styles"
import { Props } from "@guardian/src-helpers"

export { choiceCardDefault } from "@guardian/src-foundations/themes"

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={theme => groupLabelSupporting(theme.textInput && theme)}>
			{children}
		</div>
	)
}
interface ChoiceCardGroupProps extends Props {
	name: string
	label?: string
	supporting?: string
	multi?: boolean
	error?: string
	children: JSX.Element | JSX.Element[]
}

const ChoiceCardGroup = ({
	name,
	label,
	supporting,
	multi,
	error,
	cssOverrides,
	children,
	...props
}: ChoiceCardGroupProps) => {
	return (
		<fieldset css={[fieldset, cssOverrides]} {...props}>
			{label ? (
				<legend css={theme => groupLabel(theme.choiceCard && theme)}>
					{label}
				</legend>
			) : (
				""
			)}
			{supporting ? <SupportingText>{supporting}</SupportingText> : ""}
			<div css={flexContainer}>
				{React.Children.map(children, child => {
					return React.cloneElement(
						child,
						Object.assign(
							{
								error: !!error,
								type: multi ? "checkbox" : "radio",
							},
							{
								name,
							},
						),
					)
				})}
			</div>
		</fieldset>
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
