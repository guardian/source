import { css, keyframes } from '@emotion/react';

import { Format, Pillar, Special } from '@guardian/types';
import {
	culture,
	labs,
	lifestyle,
	news,
	opinion,
	specialReport,
	sport,
} from '@guardian/src-foundations';
import { storage } from '@guardian/libs';

const dotStyles = css`
	::before {
		border-radius: 62.5rem;
		display: inline-block;
		position: relative;
		background-color: currentColor;
		width: 0.75em;
		height: 0.75em;
		content: '';
		margin-right: 0.1875rem;
		vertical-align: initial;
	}
`;

const dotColor = (format: Format) => {
	switch (format.theme) {
		case Pillar.News: {
			return css`
				color: ${news[400]};
			`;
		}
		case Pillar.Opinion: {
			return css`
				color: ${opinion[400]};
			`;
		}
		case Pillar.Culture: {
			return css`
				color: ${culture[400]};
			`;
		}
		case Pillar.Sport: {
			return css`
				color: ${sport[400]};
			`;
		}
		case Pillar.Lifestyle: {
			return css`
				color: ${lifestyle[400]};
			`;
		}
		case Special.SpecialReport: {
			return css`
				color: ${specialReport[400]};
			`;
		}
		case Special.Labs: {
			return css`
				color: ${labs[400]};
			`;
		}
	}
};

const livePulse = keyframes`{
    0% {opacity: 1;}
    10% {opacity: .25;}
    40% {opacity: 1;}
    100% {opacity: 1;}
}`;

const animate = css`
	animation: ${livePulse} 1s infinite;
	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
`;

type Props = {
	format: Format;
};

export const PulsingDot = ({ format }: Props) => {
	// Respect the accessibility flag set here
	// https://www.theguardian.com/help/accessibility-help
	const flashingPreference = storage.local.get(
		'gu.prefs.accessibility.flashing-elements',
	);
	// flashingPreference is null if no preference exists and explicitly
	// false when the reader has said they don't want flashing
	const flashingEnabled = flashingPreference !== false;
	return (
		<span css={[dotColor(format), dotStyles, flashingEnabled && animate]} />
	);
};
