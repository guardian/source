import { SerializedStyles } from '@emotion/react';
import { Props } from '@guardian/src-helpers';
import { HTMLAttributes } from 'react';
import { legend } from './styles';
import { SupportingText } from './SupportingText';
import { Text } from './Text';

export interface LegendProps extends HTMLAttributes<HTMLLegendElement>, Props {
	text: string;
	supporting?: string | JSX.Element;
	optional?: boolean;
	hideLabel?: boolean;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Legend = ({
	text,
	supporting,
	optional,
	hideLabel,
	cssOverrides,
	...props
}: LegendProps) => {
	return (
		<>
			<legend css={[legend, cssOverrides]} {...props}>
				<Text text={text} optional={optional} hideLabel={hideLabel} />
			</legend>
			{supporting ? (
				<SupportingText hideLabel={hideLabel}>
					{supporting}
				</SupportingText>
			) : (
				''
			)}
		</>
	);
};
