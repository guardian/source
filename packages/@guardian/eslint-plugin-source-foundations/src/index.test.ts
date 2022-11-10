import * as pkgExports from './index';

it('Should have exactly these exports', () => {
	expect(Object.keys(pkgExports).sort()).toEqual(['configs', 'rules']);
});
