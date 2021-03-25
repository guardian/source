import React from 'react';
import { Lines } from './index';

export default {
	title: 'Lines',
	component: Lines,
};

export const fourStraightLines = () => <Lines />;
fourStraightLines.story = { name: 'four straight lines' };

export const eightStraightLines = () => <Lines count={8} />;
eightStraightLines.story = { name: 'eight straight lines' };

export const oneStraightLines = () => <Lines count={1} />;
oneStraightLines.story = { name: 'one straight line' };

export const fourDottedLines = () => <Lines effect="dotted" />;
fourDottedLines.story = { name: 'four dotted lines' };

export const eightDottedLines = () => <Lines count={8} effect="dotted" />;
eightDottedLines.story = { name: 'eight dotted lines' };

export const oneDottedLines = () => <Lines count={1} effect="dotted" />;
oneDottedLines.story = { name: 'one dotted line' };

export const fourSquigglyLines = () => <Lines effect="squiggly" />;
fourSquigglyLines.story = { name: 'four squiggly lines' };

export const eightSquigglyLines = () => <Lines count={8} effect="squiggly" />;
eightSquigglyLines.story = { name: 'eight squiggly lines' };

export const oneSquigglyLines = () => <Lines count={1} effect="squiggly" />;
oneSquigglyLines.story = { name: 'one squiggly line' };

export const fourDashedLines = () => <Lines effect="dashed" />;
fourDashedLines.story = { name: 'four dashed lines' };

export const eightDashedLines = () => <Lines count={8} effect="dashed" />;
eightDashedLines.story = { name: 'eight dashed lines' };

export const oneDashedLines = () => <Lines count={1} effect="dashed" />;
oneDashedLines.story = { name: 'one dashed line' };
