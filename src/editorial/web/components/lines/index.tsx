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
	color?: string;
}

export const Lines = ({
	effect = 'straight',
	count = 4,
	color = line.primary,
}: LinesProps) => {
	switch (effect) {
		case 'squiggly':
			return <div css={squigglyLines(count, color)} />;
		case 'dotted':
			return <div css={dottedLines(count, color)} />;
		case 'dashed':
			return <div css={dashedLines(count, color)} />;
		case 'straight':
		default:
			return <div css={straightLines(count, color)} />;
	}
};
