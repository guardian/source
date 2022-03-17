import { existsSync, mkdirSync, writeFileSync } from 'fs';
import axios from 'axios';
import { kebabToTitle } from './case';
import { generateReactComponent } from './components';
import {
	FIGMA_OPTIONS,
	ICON_FILE,
	ICON_FRAMES,
	REACT_COMPONENT_OUTPUT_DIR,
	SVG_OUTPUT_DIR,
} from './config';
import { formatSVG } from './format';
import { Log } from './log';
import { apply30x30ViewBox, stripAttributes } from './process-svg';

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

interface Node {
	name: string;
	node_id: string;
	description: string;
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

const getContentsAndWriteOutputForNode = (node: NodeWithUrl) => {
	return axios
		.get(node.url)
		.then((res) => {
			const formattedSvg = formatSVG(
				stripAttributes(node.name, res.data as string),
			);
			const componentSvg = apply30x30ViewBox(
				node.name,
				formattedSvg.trimEnd(),
			);
			const titleCaseName = kebabToTitle(node.name);
			writeFileSync(`${SVG_OUTPUT_DIR}/${node.name}.svg`, formattedSvg);
			writeFileSync(
				`${REACT_COMPONENT_OUTPUT_DIR}/Svg${titleCaseName}.tsx`,
				generateReactComponent(
					node.name,
					componentSvg,
					node.description,
				),
			);
		})
		.catch((err) => {
			console.log(`Failed to write SVG for ${node.name}:`);
			console.error(err);
		});
};

if (!existsSync(SVG_OUTPUT_DIR)) {
	mkdirSync(SVG_OUTPUT_DIR);
}
if (!existsSync(REACT_COMPONENT_OUTPUT_DIR)) {
	mkdirSync(REACT_COMPONENT_OUTPUT_DIR);
}

if (!process.env.FIGMA_TOKEN) {
	Log.error('FIGMA_TOKEN env var not set');
	process.exit(1);
}

void axios
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
					ICON_FRAMES.includes(c.containing_frame.name)
				);
			})
			.map(({ node_id, name, description }) => {
				return {
					node_id,
					name,
					description,
				};
			});
		return getUrlsForNodes(svgNodes);
	})
	.then((nodes) => {
		return Promise.all(
			nodes.map((node) => {
				return getContentsAndWriteOutputForNode(node);
			}),
		);
	})
	.then(() => {
		console.log('Icons imported successfully');
	});
