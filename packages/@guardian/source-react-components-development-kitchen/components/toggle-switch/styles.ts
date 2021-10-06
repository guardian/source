import { css, SerializedStyles } from '@emotion/react';
import { ArticleTheme, ArticlePillar, ArticleSpecial } from '@guardian/libs';
import {
	culture,
	lifestyle,
	neutral,
	news,
	opinion,
	sport,
	success,
} from '@guardian/src-foundations';

export const defaultTheme = ArticlePillar.News;

export const decideBackground = (theme: ArticleTheme) => {
	switch (theme) {
		case ArticlePillar.News:
		case ArticleSpecial.Labs:
		case ArticleSpecial.SpecialReport:
			return css`
				background: ${news[200]}40;
			`;
		case ArticlePillar.Culture:
			return css`
				background: ${culture[200]}40;
			`;
		case ArticlePillar.Lifestyle:
			return css`
				background: ${lifestyle[200]}40;
			`;
		case ArticlePillar.Sport:
			return css`
				background: ${sport[100]}40;
			`;
		case ArticlePillar.Opinion:
			return css`
				background: ${opinion[200]}40;
			`;
	}
};

export const toggleSwitchStyles = (background: SerializedStyles) => css`
	button {
		border: none;
		margin: 0 8px 0 0;
		padding: 0;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		border-radius: 1.2rem;
		position: relative;
		transition: background 0.15s ease-in-out;
	}

	button:after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: #fff;
		transition: left 0.15s ease-in-out;
		will-change: left;
	}

	button[aria-checked='false'] {
		${background}
	}
`;

export const thickStyles = () => css`
	button {
		width: 3.125rem;
		height: 1.9rem;
	}

	button:after {
		height: 1.6rem;
		width: 1.6rem;
		top: 0.15rem;
	}

	button[aria-checked='false']:after {
		left: 0.1rem;
	}

	button[aria-checked='true'] {
		background: ${success[500]};
	}

	button[aria-checked='true']:after {
		left: 1.4rem;
		background: ${neutral[100]};
	}
`;
export const slimStyles = () => css`
	button {
		width: 1.625rem;
		height: 0.75rem;
	}

	button:after {
		height: 1.125rem;
		width: 1.125rem;
		top: -0.2rem;
	}

	button[aria-checked='false']:after {
		left: -0.2rem;
	}

	button[aria-checked='true'] {
		background: ${success[500]}50;
	}

	button[aria-checked='true']:after {
		left: 0.7rem;
		background: ${success[500]};
	}
`;
