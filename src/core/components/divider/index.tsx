import { css, SerializedStyles } from '@emotion/react';

import { border, text } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { textSans } from '@guardian/src-foundations/typography';

type Props = {
	size?: 'full' | 'partial';
	spaceAbove?: 'tight' | 'loose';
	displayText?: string;
};

const fullStyles = css`
	margin-left: -10px;
	width: calc(100% + 20px);
`;
const partialStyles = css`
	margin-left: -10px;
	width: 160px;
`;

const decideSpace = (
	spaceAbove: 'tight' | 'loose',
	displayText?: string,
): SerializedStyles => {
	switch (spaceAbove) {
		case 'tight':
			return displayText
				? css`
						margin-top: -3px;
				  `
				: css`
						margin-top: ${space[6]}px;
				  `;
		case 'loose':
			return displayText
				? css`
						margin-top: 37px;
				  `
				: css`
						margin-top: ${space[12]}px;
				  `;
	}
};

export const Divider = ({
	size = 'partial',
	spaceAbove = 'loose',
	displayText,
}: Props) => {
	if (displayText) {
		return (
			<div
				css={[
					css`
						display: flex;
						flex-direction: row;
						${textSans.small()};
						color: ${text.supporting};
						margin-bottom: -10px;
						width: 100%;

						:before,
						:after {
							content: '';
							flex: 1 1;
							border-bottom: 1px solid ${border.secondary};
							margin: auto;
						}
						:before {
							margin-left: ${size === 'partial'
								? '30%'
								: '-10px'};
							margin-right: 10px;
						}
						:after {
							margin-right: ${size === 'partial'
								? '30%'
								: '-10px'};
							margin-left: 10px;
						}
					`,
					decideSpace(spaceAbove, displayText),
				]}
			>
				{displayText}
			</div>
		);
	}

	return (
		<hr
			css={[
				css`
					height: 1px;
					border: 0;
					margin-bottom: 3px;
					background-color: ${border.secondary};
				`,
				size === 'partial' ? partialStyles : fullStyles,
				decideSpace(spaceAbove),
			]}
		/>
	);
};
