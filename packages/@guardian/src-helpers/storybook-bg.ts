import {
	background,
	brandBackground,
	brandAltBackground,
} from '@guardian/source-foundations';
import { ThemeName } from '../source-react-components/src/@types/ThemeName';

type Background = ThemeName | 'inverse';

const storybookBackgrounds: {
	[key in Background]: {
		name: Background;
		value: string;
	};
} = {
	inverse: { name: 'inverse', value: background.inverse },
	default: { name: 'default', value: background.primary },
	brand: { name: 'brand', value: brandBackground.primary },
	brandAlt: {
		name: 'brandAlt',
		value: brandAltBackground.primary,
	},
};

Object.freeze(storybookBackgrounds);

export { storybookBackgrounds };
