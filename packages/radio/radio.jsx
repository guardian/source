import React from "react";
import {
	group,
	label,
	radio,
	text,
	dark,
	light,
	horizontal,
	vertical
} from "./styles";

const appearanceStyles = {
	light: light,
	dark: dark
};

const orientationStyles = {
	vertical: vertical,
	horizontal: horizontal
};

const RadioGroup = ({ name, appearance, orientation, children, ...props }) => {
	return (
		<div
			css={[
				group,
				appearanceStyles[appearance],
				orientationStyles[orientation]
			]}
			{...props}
		>
			{React.Children.map(children, child =>
				React.cloneElement(child, { name })
			)}
		</div>
	);
};
const Radio = ({ value, label: labelText, ...props }) => {
	return (
		<label css={label}>
			<input css={radio} value={value} type="radio" {...props} />
			<span css={text}>{labelText}</span>
		</label>
	);
};

const appearances = Object.keys(appearanceStyles);
const orientations = Object.keys(orientationStyles);
const radioGroupDefaultProps = {
	appearance: appearances[0],
	orientation: orientations[0]
};
const radioDefaultProps = {
	disabled: false
};

Radio.defaultProps = { ...radioDefaultProps };
RadioGroup.defaultProps = { ...radioGroupDefaultProps };

export { RadioGroup, Radio, appearances, orientations };
