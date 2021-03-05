import { Props } from '@guardian/src-helpers';
import {
	straightLines,
	squigglyLines,
	dottedLines,
	fourLines,
	eightLines,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight';

export type LineCount = 4 | 8;

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
	return <div css={[straightLines, count === 4 ? fourLines : eightLines]} />;
};
