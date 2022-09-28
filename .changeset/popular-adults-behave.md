---
'@guardian/source-foundations': major
---

- Typography functions: `headline`, `textSans`, `body`, and `titlepiece` now return a `SerializedStyles` Emotion object instead of a `string`. This is because the API includes a parent selector, which could break if used in a non-emotion environment.
  - An alternative for each named: `headlineString`, `textSansString`, `bodyString`, and `titlepieceString` is provided for use outside of Emotion environments where needed. These methods don't include the parent selector; meaning that link underline hover styles won't work as expected unless added separately.
- remove invalid syntax from the css reset
