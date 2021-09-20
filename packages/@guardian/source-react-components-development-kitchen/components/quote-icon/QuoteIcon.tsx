import { css } from '@emotion/react';
import { Format, Pillar, Special } from '@guardian/types';
import { SvgQuote } from '@guardian/src-icons';
import {
	culture,
	labs,
	lifestyle,
	news,
	opinion,
	specialReport,
	sport,
} from '@guardian/src-foundations';

const quoteColor = (format: Format) => {
	switch (format.theme) {
		case Pillar.News: {
			return css`
				svg {
					fill: ${news[400]};
				}
			`;
		}
		case Pillar.Opinion: {
			return css`
				svg {
					fill: ${opinion[400]};
				}
			`;
		}
		case Pillar.Culture: {
			return css`
				svg {
					fill: ${culture[400]};
				}
			`;
		}
		case Pillar.Sport: {
			return css`
				svg {
					fill: ${sport[400]};
				}
			`;
		}
		case Pillar.Lifestyle: {
			return css`
				svg {
					fill: ${lifestyle[400]};
				}
			`;
		}
		case Special.SpecialReport: {
			return css`
				svg {
					fill: ${specialReport[400]};
				}
			`;
		}
		case Special.Labs: {
			return css`
				svg {
					fill: ${labs[400]};
				}
			`;
		}
	}
};

export type HeadlineSize = 'xsmall' | 'small' | 'medium' | 'large';

const sizeStyles = (size: HeadlineSize) => {
	switch (size) {
		case 'xsmall':
			return css`
				svg {
					height: 22px;
					margin-left: -4px;
					margin-bottom: -6px;
					margin-top: -2px;
				}
			`;
		case 'small':
			return css`
				svg {
					height: 26px;
					margin-left: -4px;
					margin-bottom: -7px;
					margin-top: -3px;
				}
			`;
		case 'medium':
			return css`
				svg {
					height: 28px;
					margin-left: -4px;
					margin-bottom: -8px;
					margin-top: -4px;
				}
			`;
		case 'large':
			return css`
				svg {
					height: 38px;
					margin-left: -4px;
					margin-bottom: -10px;
					margin-top: -6px;
				}
			`;
	}
};

export type QuoteIconProps = {
	/**
	 * What we use to decide the editorial colour for the quotes
	 */
	format: Format;
	/**
	 * The size of the quote.
	 */
	size: HeadlineSize;
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/kitchen-source-react-components-development-kitchen-quote-icon--demo) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/quote-icon) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * The Guardian quote icon is used in kickers, headlines, drop caps and pull quotes to denote quoted text.
 *
 */
export const QuoteIcon = ({ format, size }: QuoteIconProps) => (
	<span css={[sizeStyles(size), quoteColor(format)]}>
		<SvgQuote />
	</span>
);
