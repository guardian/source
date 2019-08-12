import React from "react";
import { groupStyles, radioStyles, textStyles } from "./styles";

const RadioGroup = ({ name, children, ...props }) => {
	return (
		<div css={[groupStyles]} {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child, { name })
			)}
		</div>
	);
};
const Radio = ({ value, label, ...props }) => {
	return (
		<label>
			<input css={radioStyles} value={value} type="radio" {...props} />
			<span css={textStyles}>{label}</span>
		</label>
	);
};
const radioDefaultProps = {
	disabled: false
};

Radio.defaultProps = { ...radioDefaultProps };

export { RadioGroup, Radio };
