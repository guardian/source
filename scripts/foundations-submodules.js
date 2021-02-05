const submodules = [
	'accessibility',
	'mq',
	'palette',
	'size',
	'themes',
	'typography',
	'typography/obj',
	'utils',
];
const submodulePaths = submodules.map((s) => `@guardian/src-foundations/${s}`);

/*
Build an object that maps foundations submodule paths to their cjs equivalents
e.g.

{
	'@guardian/src-foundations/submodule1': '@guardian/src-foundations/submodule1/cjs',
	'@guardian/src-foundations/submodule2': '@guardian/src-foundations/submodule2/cjs'
}
*/
const cjsPaths = submodulePaths.reduce((acc, curr) => {
	acc[curr] = `${curr}/cjs`;
	return acc;
}, {});

export { submodules, submodulePaths, cjsPaths };
