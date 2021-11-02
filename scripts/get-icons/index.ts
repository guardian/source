import axios from 'axios';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

const ICON_FRAME = 'UI icons 24(w)x24(w)';

const OUTPUT_DIR = '../../packages/@guardian/src-icons/svg';

const FIGMA_OPTIONS = {
	headers: {
		'X-Figma-Token': process.env.FIGMA_TOKEN ?? 'ADD ME!!!',
	},
};

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
	return new Promise((resolve) => {
		return axios
			.get(
				`https://api.figma.com/v1/images/${ICON_FILE}/?ids=${nodes
					.map(({ node_id }) => node_id)
					.join(',')}&format=svg`,
				FIGMA_OPTIONS,
			)
			.then((res) => {
				return resolve(
					nodes.map((node) => ({
						...node,
						url: res.data.images[node.node_id],
					})),
				);
			});
	});
};

const getAndWriteSVGForNode = (node: NodeWithUrl) => {
	return new Promise((resolve) => {
		return axios
			.get(node.url)
			.then((res) => {
				return resolve(
					writeFileSync(`${OUTPUT_DIR}/${node.name}.svg`, res.data),
				);
			})
			.catch((err) => {
				console.log(`Failed to write SVG for ${node.name}: ${err}`);
			});
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
				return c.containing_frame?.name === ICON_FRAME;
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
