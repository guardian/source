import React, { ReactNode } from "react"
import {
	group,
	label,
	radio,
	text,
	dark,
	light,
	horizontal,
	vertical,
} from "./styles"

type Appearance = "light" | "dark"
type Orientation = "vertical" | "horizontal"

const appearanceStyles = {
	light: light,
	dark: dark,
}

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal,
}

const RadioGroup = ({
	name,
	appearance,
	orientation,
	children,
	...props
}: {
	name: string
	appearance: Appearance
	orientation: Orientation
	children: ReactNode
}) => {
	return (
		<div
			css={[
				group,
				appearanceStyles[appearance],
				orientationStyles[orientation],
			]}
			{...props}
		>
			{React.Children.map(children, child => {
				if (!React.isValidElement(child)) {
					// Consumer is probably passing a text node as a child
					// TODO: Pass error to terminal
					return <div />
				}

				return React.cloneElement(child, { name })
			})}
		</div>
	)
}
const Radio = ({
	value,
	label: labelText,
	defaultChecked,
	...props
}: {
	value: string
	label: string
	defaultChecked?: boolean
}) => {
	return (
		<label css={label}>
			<input
				css={radio}
				value={value}
				type="radio"
				defaultChecked={defaultChecked}
				{...props}
			/>
			<span css={text}>{labelText}</span>
		</label>
	)
}

const appearances = Object.keys(appearanceStyles)
const orientations = Object.keys(orientationStyles)
const radioGroupDefaultProps = {
	appearance: appearances[0],
	orientation: orientations[0],
}
const radioDefaultProps = {
	disabled: false,
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio, appearances, orientations }
