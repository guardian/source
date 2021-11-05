import { parse } from 'node-html-parser';

const svgAttributesToRemove = ['fill', 'width', 'height'];
const pathAttributesToRemove = ['fill'];

const svgsToIgnore = [
	'apple-brand',
	'facebook-brand',
	'google-brand',
	'paypal',
];

export const stripAttributes = (name: string, svg: string): string => {
	if (svgsToIgnore.includes(name)) return svg;
	const root = parse(svg);

	// Remove attributes from <svg>
	const svgTag = root.querySelector('svg');
	svgTag &&
		svgAttributesToRemove.forEach((attr) => svgTag.removeAttribute(attr));

	// Remove attributes from <path>s
	const pathTag = root.querySelectorAll('svg > *');
	pathTag.forEach((path) => {
		pathAttributesToRemove.forEach((attr) => path.removeAttribute(attr));
	});

	return selfClosePathTags(root.toString());
};

// The parser writes out path tags as <path></path> even
// if they were self closing before. This makes all path tags
// self closing
const selfClosePathTags = (svg: string): string =>
	svg.replace(/\>\<\/(path|rect)\>/gi, '/>');
