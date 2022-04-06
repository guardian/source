import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { palette } from '@guardian/source-foundations';
import { DashedLines } from './DashedLines';
import { DottedLines } from './DottedLines';
import { SquigglyLines } from './SquigglyLines';
import { StraightLines } from './StraightLines';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'dashed';

export type LineCount = 1 | 4 | 8;

export interface LinesProps {
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
	color = palette.neutral[86],
}: LinesProps): EmotionJSX.Element => {
	switch (effect) {
		case 'squiggly':
			return <SquigglyLines count={count} color={color} />;
		case 'dotted':
			return <DottedLines count={count} color={color} />;
		case 'dashed':
			return <DashedLines count={count} color={color} />;
		case 'straight':
		default:
			return <StraightLines count={count} color={color} />;
	}
};
