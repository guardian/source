import { css } from '@emotion/react';

import { Format, Pillar, Special } from '@guardian/types';
import { until } from '@guardian/src-foundations/mq';
import {
	culture,
	labs,
	lifestyle,
	news,
	opinion,
	specialReport,
	sport,
} from '@guardian/src-foundations';

const quoteStyles = css`
	height: 17px;
	width: 9px;
	margin-right: 12px;
	transform: translateY(-1px);
	overflow: visible;
`;

const quoteColor = (format: Format) => {
	switch (format.theme) {
		case Pillar.News: {
			return css`
				fill: ${news[400]};
			`;
		}
		case Pillar.Opinion: {
			return css`
				fill: ${opinion[400]};
			`;
		}
		case Pillar.Culture: {
			return css`
				fill: ${culture[400]};
			`;
		}
		case Pillar.Sport: {
			return css`
				fill: ${sport[400]};
			`;
		}
		case Pillar.Lifestyle: {
			return css`
				fill: ${lifestyle[400]};
			`;
		}
		case Special.SpecialReport: {
			return css`
				fill: ${specialReport[400]};
			`;
		}
		case Special.Labs: {
			return css`
				fill: ${labs[400]};
			`;
		}
	}
};

type HeadlineSize = 'tiny' | 'small' | 'medium' | 'large';

const sizeStyles = (size: HeadlineSize) => {
	const tinySvg = css`
		svg {
			height: 13px;
			width: 7px;
		}
	`;
	const smallSvg = css`
		svg {
			height: 16px;
			width: 8px;
		}
	`;
	const mediumSvg = css`
		margin-right: 4px;
		svg {
			height: 20px;
			width: 11px;
		}
	`;
	const largeSvg = css`
		margin-right: 8px;
		svg {
			height: 24px;
			width: 13px;
		}
	`;

	switch (size) {
		case 'tiny':
			return css`
				${tinySvg}
			`;
		case 'small':
			return css`
				${smallSvg}
			`;
		case 'medium':
			return css`
				${mediumSvg}
				${until.desktop} {
					${smallSvg}
				}
			`;
		case 'large':
			return css`
				${largeSvg}
				${until.desktop} {
					${mediumSvg}
				}
			`;
	}
};

type Props = {
	format: Format;
	size: HeadlineSize;
};

export const QuoteIcon = ({ format, size }: Props) => (
	<span css={sizeStyles(size)}>
		<svg
			width="70"
			height="49"
			viewBox="0 0 35 25"
			css={[quoteStyles, quoteColor(format)]}
			data-testid="quote-icon"
		>
			<path d="M69.587.9c-1.842 15.556-3.89 31.316-4.708 48.1H37.043c3.07-16.784 8.391-32.544 17.602-48.1h14.942zM32.949.9c-2.047 15.556-4.094 31.316-4.912 48.1H.2C3.066 32.216 8.592 16.456 17.598.9h15.35z" />
		</svg>
	</span>
);
