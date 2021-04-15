import { css } from '@emotion/react';

import { Design, Display, Format, Pillar, Special } from '@guardian/types';
import {
	Button as CoreButton,
	ButtonProps as CoreButtonProps,
	LinkButton as CoreLinkButton,
	LinkButtonProps as CoreLinkButtonProps,
	ButtonPriority,
} from '@guardian/src-button';
import {
	culture,
	labs,
	lifestyle,
	news,
	opinion,
	specialReport,
	sport,
	neutral,
} from '@guardian/src-foundations';

export interface ButtonProps extends CoreButtonProps {
	format?: Format;
	priority?: ButtonPriority;
	children: React.ReactNode;
}

export interface LinkButtonProps extends CoreLinkButtonProps {
	format?: Format;
	priority?: ButtonPriority;
	children: React.ReactNode;
}

const defaultFormat = {
	display: Display.Standard,
	design: Design.Article,
	theme: Pillar.News,
};

const WHITE = neutral[100];

const decideBackground = (format: Format, priority: ButtonPriority) => {
	switch (priority) {
		case 'primary':
		case 'secondary':
			switch (format.theme) {
				case Pillar.News:
					return css`
						background-color: ${news[300]};
						:hover {
							background-color: ${news[400]};
							border: 1px solid ${news[400]};
						}
					`;
				case Pillar.Culture:
					return css`
						background-color: ${culture[300]};
						:hover {
							background-color: ${culture[400]};
							border: 1px solid ${culture[400]};
						}
					`;
				case Pillar.Lifestyle:
					return css`
						background-color: ${lifestyle[300]};
						:hover {
							background-color: ${lifestyle[400]};
							border: 1px solid ${lifestyle[400]};
						}
					`;
				case Pillar.Sport:
					return css`
						background-color: ${sport[300]};
						:hover {
							background-color: ${sport[400]};
							border: 1px solid ${sport[400]};
						}
					`;
				case Pillar.Opinion:
					return css`
						background-color: ${opinion[300]};
						:hover {
							background-color: ${opinion[400]};
							border: 1px solid ${opinion[400]};
						}
					`;
				case Special.Labs:
					return css`
						background-color: ${labs[300]};
						:hover {
							background-color: ${labs[400]};
							border: 1px solid ${labs[400]};
						}
					`;
				case Special.SpecialReport:
					return css`
						background-color: ${specialReport[300]};
						:hover {
							background-color: ${specialReport[400]};
							border: 1px solid ${specialReport[400]};
						}
					`;
			}
		case 'subdued':
		case 'tertiary':
			return css`
				background-color: transparent;
			`;
	}
};

const decideBorder = (format: Format, priority: ButtonPriority) => {
	switch (priority) {
		case 'primary':
		case 'secondary':
			switch (format.theme) {
				case Pillar.News:
					return css`
						border: 1px solid ${news[300]};
					`;
				case Pillar.Culture:
					return css`
						border: 1px solid ${culture[300]};
					`;
				case Pillar.Lifestyle:
					return css`
						border: 1px solid ${lifestyle[300]};
					`;
				case Pillar.Sport:
					return css`
						border: 1px solid ${sport[300]};
					`;
				case Pillar.Opinion:
					return css`
						border: 1px solid ${opinion[300]};
					`;
				case Special.Labs:
					return css`
						border: 1px solid ${labs[300]};
					`;
				case Special.SpecialReport:
					return css`
						border: 1px solid ${specialReport[300]};
					`;
			}
		case 'tertiary':
			switch (format.theme) {
				case Pillar.News:
					return css`
						border: 1px solid ${news[400]};
					`;
				case Pillar.Culture:
					return css`
						border: 1px solid ${culture[400]};
					`;
				case Pillar.Lifestyle:
					return css`
						border: 1px solid ${lifestyle[400]};
					`;
				case Pillar.Sport:
					return css`
						border: 1px solid ${sport[400]};
					`;
				case Pillar.Opinion:
					return css`
						border: 1px solid ${opinion[400]};
					`;
				case Special.Labs:
					return css`
						border: 1px solid ${labs[400]};
					`;
				case Special.SpecialReport:
					return css`
						border: 1px solid ${specialReport[400]};
					`;
			}
		case 'subdued':
			return css`
				border: none;
			`;
	}
};

const decideFont = (format: Format, priority: ButtonPriority) => {
	switch (priority) {
		case 'primary':
		case 'secondary':
			return css`
				color: ${WHITE};
			`;
		case 'subdued':
		case 'tertiary':
			switch (format.theme) {
				case Pillar.News:
					return css`
						color: ${news[400]};
					`;
				case Pillar.Culture:
					return css`
						color: ${culture[400]};
					`;
				case Pillar.Lifestyle:
					return css`
						color: ${lifestyle[400]};
					`;
				case Pillar.Sport:
					return css`
						color: ${sport[400]};
					`;
				case Pillar.Opinion:
					return css`
						color: ${opinion[400]};
					`;
				case Special.Labs:
					return css`
						color: ${labs[400]};
					`;
				case Special.SpecialReport:
					return css`
						color: ${specialReport[400]};
					`;
			}
	}
};

export const Button = ({
	format = defaultFormat,
	children,
	priority = 'primary',
	...props
}: ButtonProps) => {
	const backgroundOverrides = decideBackground(format, priority);
	const borderOverrides = decideBorder(format, priority);
	const fontOverrides = decideFont(format, priority);

	return (
		<CoreButton
			priority={priority}
			cssOverrides={[backgroundOverrides, borderOverrides, fontOverrides]}
			{...props}
		>
			{children}
		</CoreButton>
	);
};

export const LinkButton = ({
	format = defaultFormat,
	children,
	priority = 'primary',
	...props
}: LinkButtonProps) => {
	const backgroundOverrides = decideBackground(format, priority);
	const borderOverrides = decideBorder(format, priority);
	const fontOverrides = decideFont(format, priority);

	return (
		<CoreLinkButton
			priority={priority}
			cssOverrides={[backgroundOverrides, borderOverrides, fontOverrides]}
			{...props}
		>
			{children}
		</CoreLinkButton>
	);
};
