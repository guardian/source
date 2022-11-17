import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden as _visuallyHidden } from '@guardian/source-foundations';
import type { ReactNode } from 'react';
import type { Theme } from '../@types/Theme';
import { supportingText } from './styles';

const visuallyHidden = css`
	${_visuallyHidden}
`;

export const SupportingText = ({
	hideLabel,
	children,
	supportDarkMode = false,
}: {
	hideLabel?: boolean;
	children: ReactNode;
	supportDarkMode?: boolean;
}): EmotionJSX.Element => {
	return (
		<p
			css={(theme: Theme) => [
				supportingText(supportDarkMode, theme.label),
				hideLabel ? visuallyHidden : '',
			]}
		>
			{children}
		</p>
	);
};
