import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import type { OptionHTMLAttributes } from 'react';
import type { Props } from '../@types/types';

export interface OptionProps
	extends OptionHTMLAttributes<HTMLOptionElement>,
		Props {
	children: string;
}

export const Option = ({ cssOverrides, children, ...props }: OptionProps) => {
	return (
		<option css={cssOverrides} {...props}>
			{children}
		</option>
	);
};
