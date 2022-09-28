---
'@guardian/source-foundations': major
---

- The `input` reset now returns a `SerializedStyles` Emotion object instead of a `string`
- Typography functions: `headline`, `textSans`, `body`, and `titlepiece` now return a `SerializedStyles` Emotion object instead of a `string`.
  - String alternatives are provided, but please note that link underline hover styles won't work as expected unless added separately, because they depend on the parent selector which is only available in Emotion.
