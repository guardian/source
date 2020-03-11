import React, {
	ReactNode,
	useRef,
	useEffect,
	useState,
	InputHTMLAttributes,
} from "react"
import {
	fieldset,
	flexContainer,
	groupLabel,
	input,
	tickAnimation,
	choiceCard,
	groupLabelSupporting,
	tick,
	errorChoiceCard,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"
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
			{typeof error === "string" && <InlineError>{error}</InlineError>}
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

interface ChoiceCardProps extends InputHTMLAttributes<HTMLInputElement>, Props {
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
	defaultChecked,
	cssOverrides,
	error,
	onChange,
	...props
}: ChoiceCardProps) => {
	const inputEl = useRef<HTMLInputElement>(null)
	const isChecked = (): boolean => {
		if (checked != null) {
			return checked
		}

		return !!defaultChecked
	}
	// prevent the animation firing if a Choice Card has been checked by default
	const [userChanged, setUserChanged] = useState(false)

	useEffect(() => {
		if (!userChanged && checked != null && inputEl && inputEl.current) {
			inputEl.current.checked = checked
		}
	})

	return (
		<>
			<input
				css={theme => [
					input(theme.choiceCard && theme),
					userChanged ? tickAnimation : "",
					cssOverrides,
				]}
				id={id}
				value={value}
				aria-invalid={error}
				aria-checked={isChecked()}
				ref={inputEl}
				onChange={event => {
					if (onChange) {
						onChange(event)
					}
					setUserChanged(true)
				}}
				{...props}
			/>
			<label
				css={theme => [
					choiceCard(theme.choiceCard && theme),
					error ? errorChoiceCard(theme.choiceCard && theme) : "",
				]}
				htmlFor={id}
			>
				<span>{labelContent}</span>
				<span css={theme => [tick(theme.checkbox && theme)]} />
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
