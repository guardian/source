import { Special, Pillar } from '@guardian/types';
import type { Theme } from '@guardian/types';

import {
	news,
	opinion,
	sport,
	culture,
	lifestyle,
	specialReport,
	labs,
} from '@guardian/src-foundations/palette';

type Colour = string;

type PillarPalette = {
	300: Colour;
	400: Colour;
	500: Colour;
	600: Colour;
	800: Colour;
};

type SpecialPalette = {
	300: Colour;
	400: Colour;
	500: Colour;
	800: Colour;
};

/**
 * Exposes a convenience object for deciding Colour
 *
 * Usage: `pillarPalette[Pillar.Opinion][300]`
 * */
export const pillarPalette: Record<Theme, PillarPalette | SpecialPalette> = {
	[Pillar.News]: {
		300: news[300],
		400: news[400],
		500: news[500],
		600: news[600],
		800: news[800],
	},
	[Pillar.Opinion]: {
		300: opinion[300],
		400: opinion[400],
		500: opinion[500],
		600: opinion[600],
		800: opinion[800],
	},
	[Pillar.Sport]: {
		300: sport[300],
		400: sport[400],
		500: sport[500],
		600: sport[600],
		800: sport[800],
	},
	[Pillar.Culture]: {
		300: culture[300],
		400: culture[400],
		500: culture[500],
		600: culture[600],
		800: culture[800],
	},
	[Pillar.Lifestyle]: {
		300: lifestyle[300],
		400: lifestyle[400],
		500: lifestyle[500],
		600: lifestyle[600],
		800: lifestyle[800],
	},
	[Special.Labs]: {
		300: labs[300],
		400: labs[400],
		500: '#69d1ca',
		800: '#65a897',
	},
	[Special.SpecialReport]: {
		300: specialReport[300],
		400: specialReport[400],
		500: specialReport[500],
		800: specialReport[800],
	},
};
