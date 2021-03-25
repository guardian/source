import { Props } from '@guardian/src-helpers';
import {
	straightLines,
	squigglyLines,
	dottedLines,
	fourLines,
	eightLines,
	labsLines,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'labs';

export type LineCount = 2 | 4 | 8;

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
	if(effect === 'labs') {
		return <div css={labsLines(count)} />;
	}
	return <div css={[straightLines, count === 4 ? fourLines : eightLines]} />;
};
