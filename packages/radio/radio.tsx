import React, { ReactNode } from "react"
import {
	group,
	label,
	labelWithSupportingText,
	radio,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	horizontal,
	vertical,
	errorRadio,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"

type Orientation = "vertical" | "horizontal"

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
}

const RadioGroup = ({
	name,
	orientation,
	error,
	children,
	...props
}: {
	name: string
	orientation: Orientation
	error?: boolean | string
	children: ReactNode
}) => {
	return (
		<div css={[group, orientationStyles[orientation]]} {...props}>
			{typeof error === "string" && <InlineError>{error}</InlineError>}
			{React.Children.map(children, child => {
				if (!React.isValidElement(child)) {
					// Consumer is probably passing a text node as a child
					// TODO: Pass error to terminal
					return <div />
				}

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

const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean
	children: ReactNode
}) => {
	return (
		<div
			css={theme => [
				hasSupportingText ? labelTextWithSupportingText : "",
				labelText(theme.radio && theme),
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={theme => supportingText(theme.radio && theme)}>
			{children}
		</div>
	)
}

const Radio = ({
	value,
	label: labelContent,
	supporting,
	defaultChecked,
	error,
	...props
}: {
	value: string
	label: string
	supporting?: string
	defaultChecked?: boolean
	error?: boolean
}) => {
	return (
		<label
			css={theme => [
				label(theme.radio && theme),
				supporting ? labelWithSupportingText : "",
			]}
		>
			<input
				css={theme => [
					radio(theme.radio && theme),
					error ? errorRadio : "",
				]}
				value={value}
				type="radio"
				defaultChecked={defaultChecked}
				aria-invalid={error}
				{...props}
			/>
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
	)
}

const radioGroupDefaultProps = {
	orientation: "vertical",
}
const radioDefaultProps = {
	disabled: false,
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio }
