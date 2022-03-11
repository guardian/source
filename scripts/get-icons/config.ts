export const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

export const ICON_FRAMES = ['UI icons 24(w)x24(w)', 'Payment icons 24 x 24'];

export const SVG_OUTPUT_DIR =
	'../../packages/@guardian/source-react-components/src/icons/svgs';

export const REACT_COMPONENT_OUTPUT_DIR =
	'../../packages/@guardian/source-react-components/src/icons/components';

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
	'paypal',
];
