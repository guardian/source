export const kebabToTitle = (name: string): string => {
	return name
		.split('-')
		.map((s) => s.substr(0, 1).toLocaleUpperCase() + s.substring(1))
		.join('');
};
