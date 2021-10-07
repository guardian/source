import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleTheme } from '@guardian/libs';
import { ArticlePillar, ArticleSpecial } from '@guardian/libs';
import {
	culture,
	lifestyle,
	news,
	opinion,
	sport,
	success,
} from '@guardian/src-foundations';

export const defaultTheme = ArticlePillar.News;

export const decideBackground = (theme: ArticleTheme): SerializedStyles => {
	switch (theme) {
		case ArticlePillar.News:
		case ArticleSpecial.Labs:
		case ArticleSpecial.SpecialReport:
			return css`
				background: ${news[200]}40;
			`;
		case ArticlePillar.Culture:
			return css`
				background-color: ${culture[200]}40;
			`;
		case ArticlePillar.Lifestyle:
			return css`
				background-color: ${lifestyle[200]}40;
			`;
		case ArticlePillar.Sport:
			return css`
				background-color: ${sport[100]}40;
			`;
		case ArticlePillar.Opinion:
			return css`
				background-color: ${opinion[200]}40;
			`;
	}
};

export const toggleSwitchStyles = (
	background: SerializedStyles,
): SerializedStyles => css`
	button {
		border: none;
		margin: 0 8px 0 0;
		padding: 0;
		width: 3.75em;
		height: 1.9rem;
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
		height: 1.6rem;
		width: 1.6rem;
		border-radius: 50%;
		top: 0.15rem;
		background: #fff;
		transition: left 0.15s ease-in-out;
		will-change: left;
	}

	button[aria-checked='false'] {
		${background}
	}
	button[aria-checked='false']:after {
		left: 0.1em;
	}
	button[aria-checked='true'] {
		background: ${success[500]};
	}
	button[aria-checked='true']:after {
		left: 1.4rem;
	}
`;
