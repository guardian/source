import { Label, labelBrand } from '@guardian/src-label';
import { isValidElement } from 'react';

export default {
	title: 'Source Shakedown/source-shakedown',
};

console.log('***Label:', isValidElement(Label));
console.log('***LabelBrand:', isValidElement(labelBrand));

const LabelDemo = () => <Label text="Who are you?"></Label>;

export { LabelDemo };
