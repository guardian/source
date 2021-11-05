import axios from 'axios';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import {
	FIGMA_OPTIONS,
	ICONS_TO_IGNORE,
	ICON_FILE,
	ICON_FRAMES,
	OUTPUT_DIR,
} from './config';
import { stripAttributes } from './process';

interface FigmaComponentsResponse {
	meta: {
		components: Array<{
			containing_frame?: {
				name: string;
			};
			name: string;
			node_id: string;
		}>;
	};
}

interface Node {
	name: string;
	node_id: string;
}

interface NodeWithUrl extends Node {
	url: string;
}

const getUrlsForNodes = (nodes: Node[]): Promise<NodeWithUrl[]> => {
	return axios
		.get(
			`https://api.figma.com/v1/images/${ICON_FILE}/?ids=${nodes
				.map(({ node_id }) => node_id)
				.join(',')}&format=svg`,
			FIGMA_OPTIONS,
		)
		.then((res) => {
			return nodes.map((node) => ({
				...node,
				url: res.data.images[node.node_id],
			}));
		});
};

const getAndWriteSVGForNode = (node: NodeWithUrl) => {
	return axios
		.get(node.url)
		.then((res) => {
			return writeFileSync(
				`${OUTPUT_DIR}/${node.name}.svg`,
				stripAttributes(node.name, res.data),
			);
		})
		.catch((err) => {
			console.log(`Failed to write SVG for ${node.name}: ${err}`);
		});
};

if (!existsSync(OUTPUT_DIR)) {
	mkdirSync(OUTPUT_DIR);
}

axios
	.get<FigmaComponentsResponse>(
		`https://api.figma.com/v1/files/${ICON_FILE}/components`,
		FIGMA_OPTIONS,
	)
	.then((res) => {
		const svgNodes = res.data.meta.components
			.filter((c) => {
				return (
					// Only get icons that are in a certain frame
					c.containing_frame &&
					ICON_FRAMES.includes(c.containing_frame.name) &&
					// Ignore some icons
					!ICONS_TO_IGNORE.includes(c.name)
				);
			})
			.map(({ node_id, name }) => {
				return {
					node_id,
					name,
				};
			});
		return getUrlsForNodes(svgNodes);
	})
	.then((nodes) => {
		return Promise.all(
			nodes.map((node) => {
				return getAndWriteSVGForNode(node);
			}),
		);
	})
	.then(() => {
		console.log('Icons imported successfully');
	});
