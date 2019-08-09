import React from "react";
import { groupStyles, radioStyles, labelStyles } from "./styles";

const RadioGroup = ({ name, children, ...props }) => {
	return (
		<div css={[groupStyles]} {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child, { name })
			)}
		</div>
	);
};
const Radio = ({ id, value, label, ...props }) => {
	return (
		<>
			<input css={radioStyles} id={id} value={value} type="radio" {...props} />
			<label css={labelStyles} htmlFor={id}>
				{label}
			</label>
		</>
	);
};
const radioDefaultProps = {
	disabled: false
};

Radio.defaultProps = { ...radioDefaultProps };

export { RadioGroup, Radio };
