import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '@guardian/src-foundations/accessibility';
import { ReactNode } from 'react';
import { supportingText } from './styles';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const SupportingText = ({
	hideLabel,
	children,
}: {
	hideLabel?: boolean;
	children: ReactNode;
}) => {
	return (
		<p
			css={(theme) => [
				supportingText(theme.label),
				hideLabel ? visuallyHidden : '',
			]}
		>
			{children}
		</p>
	);
};
