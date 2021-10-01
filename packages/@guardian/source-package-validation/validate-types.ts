import type {
	Breakpoint,
	ScaleUnit,
	Category,
	LineHeight,
	FontWeight,
	FontStyle,
	FontWeightDefinition,
	Option,
	TypographyStyles,
	TypographySizes,
	TitlepieceSizes,
	HeadlineSizes,
	BodySizes,
	TextSansSizes,
	Fs,
	FontScaleFunction,
	FontScaleFunctionStr,
	FontScaleArgs,
} from '@guardian/source-foundations';

import type {
	EditorialButtonProps,
	EditorialLinkButtonProps,
	LineCount,
	LinesProps,
	LogoProps,
	HeadlineSize,
	QuoteIconProps,
	StarRatingProps,
} from '@guardian/source-react-components-development-kitchen';

import type {
	SvgGuardianLiveLogoProps,
	SvgGuardianLogoProps,
	SvgRoundelBrandProps,
	SvgRoundelBrandInverseProps,
	SvgRoundelDefaultProps,
	SvgRoundelInverseProps,
} from '@guardian/src-brand';

import type {
	AccordionProps,
	AccordionRowProps,
} from '@guardian/src-accordion';

import type {
	ButtonPriority,
	IconSide,
	Size,
	ButtonProps,
	LinkButtonProps,
} from '@guardian/src-button';

import type { CheckboxGroupProps, CheckboxProps } from '@guardian/src-checkbox';

import type {
	ChoiceCardGroupProps,
	ChoiceCardColumns,
	ChoiceCardProps,
} from '@guardian/src-choice-card';

import type { FooterProps } from '@guardian/src-footer';

import type { LabelProps, LegendProps } from '@guardian/src-label';

import type {
	ColumnsProps,
	ColumnProps,
	ContainerProps,
	HideProps,
	StackProps,
	TilesProps,
	InlineProps,
} from '@guardian/src-layout';

import type {
	LinkPriority,
	LinkProps,
	ButtonLinkProps,
} from '@guardian/src-link';

import type { RadioGroupProps, RadioProps } from '@guardian/src-radio';

import type { OptionProps, SelectProps } from '@guardian/src-select';

import type { TextAreaProps } from '@guardian/src-text-area';

import type { TextInputProps } from '@guardian/src-text-input';

import type { UserFeedbackProps } from '@guardian/src-user-feedback';

import type { ThemeName, Props } from '@guardian/src-helpers';

// TODO: Work out how to test all of the paths
import type { Breakpoint as SrcBreakpoint } from '@guardian/src-foundations';

import type { IconSize, IconProps } from '@guardian/src-icons';

// The types have to be used somewhere or tsc falls over
export type SourceFoundations =
	| Breakpoint
	| ScaleUnit
	| Category
	| LineHeight
	| FontWeight
	| FontStyle
	| FontWeightDefinition
	| Option<Breakpoint>
	| TypographyStyles
	| TypographySizes
	| TitlepieceSizes
	| HeadlineSizes
	| BodySizes
	| TextSansSizes
	| Fs
	| FontScaleFunction
	| FontScaleFunctionStr
	| FontScaleArgs;

export type SourceReactComponentsDevelopmentKitchen =
	| EditorialButtonProps
	| EditorialLinkButtonProps
	| LineCount
	| LinesProps
	| LogoProps
	| HeadlineSize
	| QuoteIconProps
	| StarRatingProps;

export type SrcBrand =
	| SvgGuardianLiveLogoProps
	| SvgGuardianLogoProps
	| SvgRoundelBrandProps
	| SvgRoundelBrandInverseProps
	| SvgRoundelDefaultProps
	| SvgRoundelInverseProps;

export type SrcAccordion = AccordionProps | AccordionRowProps;

export type SrcButton =
	| ButtonPriority
	| IconSide
	| Size
	| ButtonProps
	| LinkButtonProps;

export type SrcCheckbox = CheckboxGroupProps | CheckboxProps;

export type SrcChoiceCard =
	| ChoiceCardGroupProps
	| ChoiceCardColumns
	| ChoiceCardProps;

export type SrcFooter = FooterProps;

export type SrcLabel = LabelProps | LegendProps;

export type SrcLayout =
	| ColumnsProps
	| ColumnProps
	| ContainerProps
	| HideProps
	| StackProps
	| TilesProps
	| InlineProps;

export type SrcLink = LinkPriority | LinkProps | ButtonLinkProps;

export type SrcRadio = RadioGroupProps | RadioProps;

export type SrcSelect = OptionProps | SelectProps;

export type SrcTextArea = TextAreaProps;

export type SrcTextInput = TextInputProps;

export type SrcUserFeedback = UserFeedbackProps;

export type SrcHelpers = ThemeName | Props;

export type SrcFoundations = SrcBreakpoint;

export type SrcIcons = IconSize | IconProps;
