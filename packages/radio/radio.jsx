import React from "react";
import { styles } from "./styles";

const RadioGroup = ({ name, children, ...props }) => {
	return (
		<div css={[styles]} {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child, { name })
			)}
		</div>
	);
};
const Radio = ({ label, ...props }) => {
	return (
		<>
			<input type="radio" {...props} />
			<label>{label}</label>
		</>
	);
};
const radioGroupDefaultProps = {
	disabled: false
};
const radioDefaultProps = {
	disabled: false
};

RadioGroup.defaultProps = { ...radioGroupDefaultProps };
Radio.defaultProps = { ...radioDefaultProps };

export { RadioGroup, Radio };
