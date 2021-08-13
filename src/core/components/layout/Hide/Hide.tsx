import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { Breakpoint } from '@guardian/src-foundations';
import { from, until } from '@guardian/src-foundations/mq';
import { Props } from '@guardian/src-helpers';

export interface HideProps extends HTMLAttributes<HTMLDivElement>, Props {
	above?: Breakpoint;
	below?: Breakpoint;
}

const Hide = ({ children, above, below }: HideProps) => {
	let whenToHide;
	if (below) {
		whenToHide = css`
			${until[below]} {
				display: none;
			}
		`;
	}
	if (above) {
		whenToHide = css`
			${whenToHide}
			${from[above]} {
				display: none;
			}
		`;
	}

	return <span css={whenToHide}>{children}</span>;
};
