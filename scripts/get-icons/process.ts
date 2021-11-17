import { parse } from 'node-html-parser';

const svgAttributesToRemove = ['fill', 'width', 'height'];
const childAttributesToRemove = ['fill'];

export const stripAttributes = (svg: string): string => {
	const root = parse(svg);

	// Remove attributes from <svg>
	const svgTag = root.querySelector('svg');
	svgTag &&
		svgAttributesToRemove.forEach((attr) => svgTag.removeAttribute(attr));

	// Remove attributes from <path>s
	const childElements = root.querySelectorAll('svg > *');
	childElements.forEach((child) => {
		childAttributesToRemove.forEach((attr) => child.removeAttribute(attr));
	});

	return selfClosePathTags(root.toString());
};

// The parser writes out path tags as <path></path> even
// if they were self closing before. This makes all path tags
// self closing
const selfClosePathTags = (svg: string): string =>
	svg.replace(/\>\<\/(path|rect)\>/gi, '/>');