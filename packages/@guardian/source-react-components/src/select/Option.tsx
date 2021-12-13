import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { OptionHTMLAttributes } from 'react';
import type { Props } from '../@types/Props';

export interface OptionProps
	extends OptionHTMLAttributes<HTMLOptionElement>,
		Props {
	children: string;
}

export const Option = ({
	cssOverrides,
	children,
	...props
}: OptionProps): EmotionJSX.Element => {
	return (
		<option css={cssOverrides} {...props}>
			{children}
		</option>
	);
};
