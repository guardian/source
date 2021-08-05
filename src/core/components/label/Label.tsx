import { SerializedStyles } from '@emotion/react';
import { Props } from '@guardian/src-helpers';
import { LabelHTMLAttributes, ReactNode } from 'react';
import { SupportingText } from './SupportingText';
import { Text } from './Text';

export interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement>,
		Props {
	text: string;
	supporting?: string;
	optional?: boolean;
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children?: ReactNode;
}

export const Label = ({
	text,
	supporting,
	optional,
	hideLabel,
	cssOverrides,
	children,
	...props
}: LabelProps) => {
	return (
		<label css={cssOverrides} {...props}>
			<Text hideLabel={hideLabel} text={text} optional={optional} />
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				''
			)}
			{children}
		</label>
	);
};
