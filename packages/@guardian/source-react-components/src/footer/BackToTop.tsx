import { SvgChevronUpSingle } from '../../vendor/icons/SvgChevronUpSingle';
import type { Theme } from '../@types/Theme';
import { backToTop, backToTopIcon } from './styles';

export const BackToTop = (
	<a href="#top" css={(theme: Theme) => backToTop(theme.footer)}>
		Back to top
		<div css={(theme: Theme) => backToTopIcon(theme.footer)}>
			<SvgChevronUpSingle />
		</div>
	</a>
);
