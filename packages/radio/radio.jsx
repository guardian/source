import React from "react";
import {
	groupStyles,
	labelStyles,
	radioStyles,
	textStyles,
	appearanceDark,
	appearanceLight
} from "./styles";

const appearancesStyles = {
	light: appearanceLight,
	dark: appearanceDark
};

const RadioGroup = ({ name, appearance, children, ...props }) => {
	return (
		<div css={[groupStyles, appearancesStyles[appearance]]} {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child, { name })
			)}
		</div>
	);
};
const Radio = ({ value, label, ...props }) => {
	return (
		<label css={labelStyles}>
			<input css={radioStyles} value={value} type="radio" {...props} />
			<span css={textStyles}>{label}</span>
		</label>
	);
};
const radioDefaultProps = {
	disabled: false
};

Radio.defaultProps = { ...radioDefaultProps };

const appearances = Object.keys(appearancesStyles);

export { RadioGroup, Radio, appearances };
