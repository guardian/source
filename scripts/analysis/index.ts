const main = async () => {
	await new Promise((resolve) => {
		resolve('success');
	});
	console.log('Running Source analysis ');
};

if (require.main === module) {
	void (async () => await main())();
}
