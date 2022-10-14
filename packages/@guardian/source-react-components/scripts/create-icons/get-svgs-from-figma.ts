import axios from 'axios';
import 'dotenv/config';

interface FigmaComponentsResponse {
	meta: {
		components: Array<{
			containing_frame?: {
				name: string;
			};
			name: string;
			node_id: string;
			description: string;
		}>;
	};
}
interface FigmaImagesResponse {
	images: Record<string, string>;
}

export const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

if (!process.env.FIGMA_TOKEN) {
	console.log('FIGMA_TOKEN not set. Please add it to your .env file.');
	console.log('See https://www.figma.com/developers/api#access-tokens');
	process.exit(1);
}

const FIGMA_API_OPTIONS = {
	headers: {
		'X-Figma-Token': process.env.FIGMA_TOKEN,
	},
};

export const getIconsFromFigma = async () => {
	// Get a list of available (figma) components from Figma
	// https://www.figma.com/developers/api#library-items-types
	const figmaComponents = (
		await axios.get<FigmaComponentsResponse>(
			`https://api.figma.com/v1/files/${ICON_FILE}/components`,
			FIGMA_API_OPTIONS,
		)
	).data.meta.components;

	// filter out the icons from the list of figma components
	const figmaIconComponents = figmaComponents.filter((c) => {
		return (
			// Only get icons that are in a certain frame
			c.containing_frame && c.containing_frame.name === 'UI icons 24(w)x24(w)'
		);
	});

	const iconIds = figmaIconComponents.map(({ node_id }) => node_id).join(',');

	// Get the URLs we can fetch actual images from from Figma
	// https://www.figma.com/developers/api#get-images-endpoint
	const figmaIconSvgUrlsByNodeId = (
		await axios.get<FigmaImagesResponse>(
			`https://api.figma.com/v1/images/${ICON_FILE}/?ids=${iconIds}&format=svg`,
			FIGMA_API_OPTIONS,
		)
	).data.images;

	const icons = [];

	for (const icon of figmaIconComponents) {
		const url = figmaIconSvgUrlsByNodeId[icon.node_id];

		if (url) {
			console.log(`Fetching ${icon.name}.svg`);

			// Fetch SVG markup from Figma
			const svg = (await axios.get<string>(url)).data;

			icons.push({
				name: icon.name,
				svg,
			});
		} else {
			throw new Error('No URL found for icon');
		}
	}

	return icons;
};
