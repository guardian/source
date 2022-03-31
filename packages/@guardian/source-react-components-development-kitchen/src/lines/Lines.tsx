import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { line } from '@guardian/source-foundations';
import type { Props } from '@guardian/source-react-components';
import {
	dashedLines,
	dottedLines,
	squigglyLines,
	straightLines,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'dashed';

export type LineCount = 1 | 4 | 8;

export interface LinesProps extends Props {
	/**
	 * The appearance of the lines
	 */
	effect?: LineEffectType;
	/**
	 * How many lines appear
	 */
	count?: LineCount;
	/**
	 * The colour of the lines
	 */
	color?: string;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-development-kitchen-lines--playground) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/lines) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 */
export const Lines = ({
	effect = 'straight',
	count = 4,
	color = line.primary,
	cssOverrides,
}: LinesProps): EmotionJSX.Element => {
	switch (effect) {
		case 'squiggly':
			return <div css={[squigglyLines(count, color), cssOverrides]} />;
		case 'dotted':
			return <div css={[dottedLines(count, color), cssOverrides]} />;
		case 'dashed':
			return <div css={[dashedLines(count, color), cssOverrides]} />;
		case 'straight':
		default:
			return <div css={[straightLines(count, color), cssOverrides]} />;
	}
};
