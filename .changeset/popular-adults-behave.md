---
'@guardian/source-foundations': major
---

- Typography functions: `headline`, `textSans`, `body`, and `titlepiece` now return a `SerializedStyles` Emotion object instead of a `string`. This is is because the API includes a parent selector, which could break any usage in a non-emotion environment.
  - An alternative for each: `headlineString`, `textSansString`, `bodyString`, and `titlepieceString` is provided for use outside of an Emotion environments where needed. These methods don't include the parent selector which means that link underlines hover styles won't work as expected.
- remove invalid syntax from the css reset
