// Mock `src/index` with whatever `package.json` points at.
// This means we can run `src/index.test.ts` against `dist` instead.

const dist = require('.');

jest.mock('./src/index', () => dist);
