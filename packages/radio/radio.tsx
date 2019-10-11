import React, { ReactNode } from "react"
import {
	group,
	label,
	radio,
	text,
	lightLabel,
	lightRadio,
	lightText,
	darkLabel,
	darkRadio,
	darkText,
	horizontal,
	vertical,
} from "./styles"
import { Appearance } from "@guardian/src-helpers"

type Orientation = "vertical" | "horizontal"

const appearanceStyles = {
	light: {
		label: lightLabel,
		radio: lightRadio,
		text: lightText,
	},
	dark: {
		label: darkLabel,
		radio: darkRadio,
		text: darkText,
	},
	blue: {
		label: darkLabel,
		radio: darkRadio,
		text: darkText,
	},
	yellow: {
		label: lightLabel,
		radio: lightRadio,
		text: lightText,
	},
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
		<div css={[group, orientationStyles[orientation]]} {...props}>
			{React.Children.map(children, child => {
				if (!React.isValidElement(child)) {
					// Consumer is probably passing a text node as a child
					// TODO: Pass error to terminal
					return <div />
				}

				return React.cloneElement(child, { name, appearance })
			})}
		</div>
	)
}
const Radio = ({
	value,
	label: labelText,
	defaultChecked,
	appearance,
	...props
}: {
	value: string
	label: string
	appearance: Appearance
	defaultChecked?: boolean
}) => {
	return (
		<label css={[label, appearanceStyles[appearance].label]}>
			<input
				css={[radio, appearanceStyles[appearance].radio]}
				value={value}
				type="radio"
				defaultChecked={defaultChecked}
				{...props}
			/>
			<span css={[text, appearanceStyles[appearance].text]}>
				{labelText}
			</span>
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
	appearance: appearances[0],
}

Radio.defaultProps = { ...radioDefaultProps }
RadioGroup.defaultProps = { ...radioGroupDefaultProps }

export { RadioGroup, Radio, appearances, orientations }
