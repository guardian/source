import React from "react";
import {
	group,
	label,
	radio,
	text,
	appearanceDark,
	appearanceLight
} from "./styles";

const appearancesStyles = {
	light: appearanceLight,
	dark: appearanceDark
};

const RadioGroup = ({ name, appearance, children, ...props }) => {
	return (
		<div css={[group, appearancesStyles[appearance]]} {...props}>
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
const radioDefaultProps = {
	disabled: false
};

Radio.defaultProps = { ...radioDefaultProps };

const appearances = Object.keys(appearancesStyles);

export { RadioGroup, Radio, appearances };
