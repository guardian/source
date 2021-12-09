import { css } from '@emotion/react';
import { from as fromMq, until as untilMq } from '@guardian/source-foundations';
import type { Breakpoint } from '@guardian/source-foundations';
import type { HTMLAttributes } from 'react';
import type { Props } from '../types';

export interface HideProps extends HTMLAttributes<HTMLDivElement>, Props {
	/**
	 * Hide child content if the viewport is narrower than the specified breakpoint.
	 */
	until?: Breakpoint;
	/**
	 * Hide child content if the viewport is as wide, or wider than, the specified breakpoint.
	 */
	from?: Breakpoint;
	/**
	 * **Deprecated**
	 *
	 * Use `from` instead.
	 */
	above?: Breakpoint;
	/**
	 * **Deprecated**
	 *
	 * Use `until` instead.
	 */
	below?: Breakpoint;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/source-src-layout-hide) •
 * [Design System](https://theguardian.design/2a1e5182b/p/78cb73-hide) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/%40guardian/src-layout/Hide) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-layout)
 *
 * Hides child content `until` and/or `from` a given breakpoint.
 */
export const Hide = ({
	children,
	above, // deprecated
	below, // deprecated
	from = above,
	until = below,
}: HideProps) => {
	let whenToHide;
	if (until) {
		whenToHide = css`
			${untilMq[until]} {
				display: none;
			}
		`;
	}
	if (from) {
		whenToHide = css`
			${whenToHide}
			${fromMq[from]} {
				display: none;
			}
		`;
	}

	return <span css={whenToHide}>{children}</span>;
};
