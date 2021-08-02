import { OptionHTMLAttributes } from 'react';
import { Props } from '@guardian/src-helpers';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, Props {
	children: string;
}

export const Option = ({ cssOverrides, children, ...props }: OptionProps) => {
	return (
		<option css={cssOverrides} {...props}>
			{children}
		</option>
	);
};
