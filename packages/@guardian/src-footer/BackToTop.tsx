import { backToTop, backToTopIcon } from './styles';

import { SvgChevronUpSingle } from '@guardian/src-icons';
export { footerBrand } from '@guardian/src-foundations/themes';

export const BackToTop = (
	<a href="#top" css={(theme) => backToTop(theme.footer)}>
		Back to top
		<div css={(theme) => backToTopIcon(theme.footer)}>
			<SvgChevronUpSingle />
		</div>
	</a>
);
