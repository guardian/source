import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden } from '@guardian/source-foundations';
import type { ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

export const buttonContents = ({
	hideLabel,
	iconSvg,
	children,
}: {
	hideLabel?: boolean;
	iconSvg?: ReactElement;
	children: ReactNode;
}): EmotionJSX.Element | ReactNode[] => {
	const contents = [children];

	if (iconSvg) {
		if (!hideLabel) {
			contents.push(<div key="space" className="src-button-space" />);
		}
		contents.push(cloneElement(iconSvg, { key: 'svg' }));
	}
	if (hideLabel) {
		return (
			<>
				<span
					css={css`
						${visuallyHidden};
					`}
				>
					{children}
				</span>
				{contents[1]}
			</>
		);
	} else {
		return contents;
	}
};
