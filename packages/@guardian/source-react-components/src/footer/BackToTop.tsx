import { SvgChevronUpSingle } from '../icons/components/SvgChevronUpSingle';
import { backToTop, backToTopIcon } from './styles';

export const BackToTop = (
	<a href="#top" css={(theme) => backToTop(theme.footer)}>
		Back to top
		<div css={(theme) => backToTopIcon(theme.footer)}>
			<SvgChevronUpSingle />
		</div>
	</a>
);
