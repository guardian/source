import { Props } from '@guardian/src-helpers';
import {
	straightLines,
	squigglyLines,
	dottedLines,
	fourLines,
	eightLines,
	dashedLines,
	oneLine,
} from './styles';

type LineEffectType = 'squiggly' | 'dotted' | 'straight' | 'dashed';

export type LineCount = 1 | 4 | 8;

export interface LinesProps extends Props {
	effect?: LineEffectType;
	count?: LineCount;
}

export const Lines = ({ effect = 'straight', count = 4 }: LinesProps) => {
	switch (effect) {
		case 'squiggly':
			return <div css={squigglyLines(count)} />;
		case 'dotted':
			return <div css={dottedLines(count)} />;
		case 'dashed':
			return <div css={dashedLines(count)} />;
		case 'straight':
		default:
			return (
				<div
					css={[
						straightLines,
						count === 1
							? oneLine
							: count === 4
							? fourLines
							: eightLines,
					]}
				/>
			);
	}
};
