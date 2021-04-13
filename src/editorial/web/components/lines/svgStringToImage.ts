import svgToTinyDataUri from 'mini-svg-data-uri';

export const svgImageUrl = (svg: string): string => {
	return `url("${svgToTinyDataUri(svg.replace(/\s\s+/g, ' '))}")`;
};
