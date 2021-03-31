import { Props } from '@guardian/src-helpers';
import { line } from '@guardian/src-foundations/palette';
import {
	straightLines,
	squigglyLines,
	dottedLines,
	dashedLines,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'dashed';

export type LineCount = 1 | 4 | 8;

export interface LinesProps extends Props {
	effect?: LineEffectType;
	count?: LineCount;
	colour?: string;
}

export const Lines = ({
	effect = 'straight',
	count = 4,
	colour = line.primary,
}: LinesProps) => {
	switch (effect) {
		case 'squiggly':
			return <div css={squigglyLines(count, colour)} />;
		case 'dotted':
			return <div css={dottedLines(count, colour)} />;
		case 'dashed':
			return <div css={dashedLines(count, colour)} />;
		case 'straight':
		default:
			return <div css={straightLines(count, colour)} />;
	}
};
