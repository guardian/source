import { Props } from '@guardian/src-helpers';
import {
	straightLines,
	squigglyLines,
	dottedLines,
	fourLines,
	eightLines,
	dashedLines,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'dashed';

export type LineCount = 1 | 4 | 8;

export interface LinesProps extends Props {
	effect?: LineEffectType;
	count?: LineCount;
}

export const Lines = ({ effect = 'straight', count = 4 }: LinesProps) => {
	if (effect === 'squiggly') {
		return <div css={squigglyLines(count)} />;
	}
	if (effect === 'dotted') {
		return <div css={dottedLines(count)} />;
	}
	if (effect === 'dashed') {
		return <div css={dashedLines(count)} />;
	}
	return <div css={[straightLines, count === 4 ? fourLines : eightLines]} />;
};
