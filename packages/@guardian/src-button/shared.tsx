import { cloneElement, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';

export const buttonContents = ({
	hideLabel,
	iconSvg,
	children,
}: {
	hideLabel?: boolean;
	iconSvg?: ReactElement;
	children: ReactNode;
}) => {
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
