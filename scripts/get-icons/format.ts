import { html, HTMLBeautifyOptions } from 'js-beautify';

const options: HTMLBeautifyOptions = {
	wrap_attributes: 'force-expand-multiline',
	indent_with_tabs: true,
	end_with_newline: true,
};

export const formatSVG = (svg: string): string => {
	return html(svg, options);
};
