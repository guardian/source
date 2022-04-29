import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { visuallyHidden } from '@guardian/source-foundations';
import type { ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';
import { SvgSpinner } from '../icons/SvgSpinner';

export const buttonContents = ({
	hideLabel,
	iconSvg,
	isLoading,
	children,
}: {
	hideLabel?: boolean;
	iconSvg?: ReactElement;
	isLoading?: boolean;
	children: ReactNode;
}): EmotionJSX.Element | ReactNode[] => {
	const contents = [children];

	if (isLoading) {
		if (!hideLabel) {
			contents.push(<div key="space" className="src-button-space" />);
		}
		contents.push(
			cloneElement(<SvgSpinner />, {
				key: 'svg',
			}),
		);
	} else if (iconSvg) {
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
