export const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

export const ICON_FRAMES = ['UI icons 24(w)x24(w)'];

const ICONS_DIR = '../../packages/@guardian/source-react-components/src/icons';

export const SVG_OUTPUT_DIR = `${ICONS_DIR}/svgs`;

export const REACT_COMPONENT_OUTPUT_DIR = `${ICONS_DIR}/components`;

export const FIGMA_OPTIONS = {
	headers: {
		'X-Figma-Token': process.env.FIGMA_TOKEN ?? 'ADD ME!!!',
	},
};

// For some icons, generally those of brands, we retain the
// fill colours
export const ICONS_WITH_FILL_COLOURS = [
	'apple-brand',
	'facebook-brand',
	'google-brand',
	'pay-pal-brand',
];

// Some icons don't conform to the 24x24 canvas size
export const ICONS_WITH_CUSTOM_VIEWBOX: Record<string, string> = {
	'direct-debit-wide': '-1 2 50 20',
};

// 48x24 icons
export const WIDE_ICONS = ['direct-debit-wide'];
