import axios from 'axios';
// import fs from 'fs';

const options = {
	headers: {
		'X-Figma-Token': 'ADD ME!!!',
	},
};

axios
	.get(
		'https://api.figma.com/v1/files/Ai7AELHC6KCz38qKZkvuHo/components',
		options,
	)
	.then((res) => {
		const svgNodes = res.data.meta.components
			.filter((c: any) => {
				return c.containing_frame?.name === 'UI icons 24(w)x24(w)';
			})
			.map(({ node_id, name }: { node_id: string; name: string }) => {
				return {
					node_id,
					name,
				};
			});

		return axios
			.get(
				`https://api.figma.com/v1/images/Ai7AELHC6KCz38qKZkvuHo/?ids=${svgNodes
					.map(({ node_id }: { node_id: string }) => node_id)
					.join(',')}&format=svg`,
				options,
			)
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
	});
