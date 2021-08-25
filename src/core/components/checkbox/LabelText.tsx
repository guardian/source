import { ReactNode } from 'react';
import { labelText, labelTextWithSupportingText } from './styles';

export const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean;
	children: ReactNode;
}) => {
	return (
		<div
			css={(theme) => [
				labelText(theme.checkbox && theme),
				hasSupportingText ? labelTextWithSupportingText : '',
			]}
		>
			{children}
		</div>
	);
};
