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

export const toggleSwitchStyles = (
	background: SerializedStyles,
	slim: boolean,
) => css`
	button {
		border: none;
		margin: 0 8px 0 0;
		padding: 0;
		width: ${slim ? '1.625rem' : '3.75em'};
		height: ${slim ? '0.75rem' : '1.9rem'};
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
		height: ${slim ? '1.125rem' : '1.6rem'};
		width: ${slim ? '1.125rem' : '1.6rem'};
		border-radius: 50%;
		top: ${slim ? '-0.2rem' : '0.15rem'};
		background: #fff;
		transition: left 0.15s ease-in-out;
		will-change: left;
	}

	button[aria-checked='false'] {
		${background}
	}
	button[aria-checked='false']:after {
		left: ${slim ? '-0.2rem' : '0.1rem'};
	}
	button[aria-checked='true'] {
		background: ${slim
			? css`
					${success[500]}50
			  `
			: success[500]};
	}
	button[aria-checked='true']:after {
		left: ${slim ? '0.7rem' : '1.4rem'};
		background: ${slim ? success[500] : neutral[100]};
	}
`;
