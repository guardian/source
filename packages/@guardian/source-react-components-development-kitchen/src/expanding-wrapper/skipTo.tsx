import { css } from '@emotion/react';
import { focus, neutral } from '@guardian/source-foundations';

type Props = {
	id: string;
	label: string;
};

export const SkipTo = ({ id, label }: Props) => {
	return (
		<a
			href={`#${id}`}
			css={css`
				border: 0
				clip: rect(0 0 0 0);
				height: 0.0625rem;
				margin: -0.0625rem;
				overflow: hidden;
				padding: 0;
				position: absolute;
				width: 0.0625rem;
				&:focus,
				&:active {
					border: 1px solid ${focus[400]};
					font-size: 80%;
					display: block;
					color: ${neutral[7]};
					text-decoration: none;
					position: static;
					width: 100%;
					height: 1.125rem;
					text-align: center;
					}
			`}
		>
			{label}
		</a>
	);
};
