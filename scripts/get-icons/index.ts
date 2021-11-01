import axios from 'axios';
// import fs from 'fs';

const ICON_FILE = 'Ai7AELHC6KCz38qKZkvuHo';

const ICON_FRAME = 'UI icons 24(w)x24(w)';

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

		return axios.get(
			`https://api.figma.com/v1/images/${ICON_FILE}/?ids=${svgNodes
				.map(({ node_id }) => node_id)
				.join(',')}&format=svg`,
			FIGMA_OPTIONS,
		);
	})
	.then((res) => {
		const images = Object.values(res.data.images) as string[];

		return Promise.all(
			images.map((imageUrl) => {
				return axios.get(imageUrl);
			}),
		);
	})
	.then((res) => {
		console.log(res[0].data);

		// fs.writeFileSync('image.svg', res[0].data, {
		// 	encoding: 'utf-8',
		// });
	});
