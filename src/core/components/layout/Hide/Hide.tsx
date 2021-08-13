import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { Breakpoint } from '@guardian/src-foundations';
import { from as fromMq, until as untilMq } from '@guardian/src-foundations/mq';
import { Props } from '@guardian/src-helpers';

export interface HideProps extends HTMLAttributes<HTMLDivElement>, Props {
	from?: Breakpoint;
	until?: Breakpoint;
	above?: Breakpoint;
	below?: Breakpoint;
}

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
