import { css, SerializedStyles } from '@emotion/react';
import { border, text } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { textSans } from '@guardian/src-foundations/typography';
import { partialStyles, fullStyles } from './styles';

type Sizes = 'full' | 'partial' | 'fit';
type Spaces = 'tight' | 'loose' | 'none';
export type DividerProps = {
	size?: Sizes;
	spaceAbove?: Spaces;
	displayText?: string;
};

const decideSpace = (
	spaceAbove: Spaces,
	displayText?: string,
): SerializedStyles => {
	switch (spaceAbove) {
		case 'tight':
			return displayText
				? css`
						margin-top: -${space[1]}px;
				  `
				: css`
						margin-top: ${space[6]}px;
				  `;
		case 'loose':
			return displayText
				? css`
						margin-top: ${space[9]}px;
				  `
				: css`
						margin-top: ${space[12]}px;
				  `;
		case 'none':
			return css`
				margin-top: 0;
			`;
	}
};

const decideSize = (size: Sizes, displayText?: string) => {
	switch (size) {
		case 'fit':
			return displayText
				? css`
						:before {
							margin-left: 0;
						}

						:after {
							margin-right: 0;
						}
				  `
				: null;
		case 'full':
			return displayText
				? css`
						:before {
							margin-left: -10px;
						}

						:after {
							margin-right: -10px;
						}
				  `
				: fullStyles;
		case 'partial':
			return displayText
				? css`
						:before {
							margin-left: 30%;
						}

						:after {
							margin-right: 30%;
						}
				  `
				: partialStyles;
	}
};

export const Divider = ({
	size = 'partial',
	spaceAbove = 'loose',
	displayText,
}: DividerProps) => {
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
							margin-right: 10px;
						}
						:after {
							margin-left: 10px;
						}
					`,
					decideSize(size, displayText),
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
					margin-bottom: ${space[1]}px;
					background-color: ${border.secondary};
				`,
				decideSize(size),
				decideSpace(spaceAbove),
			]}
		/>
	);
};
