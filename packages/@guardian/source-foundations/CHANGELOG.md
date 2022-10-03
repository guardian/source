# @guardian/source-foundations

## 6.0.1

### Patch Changes

- 54dd09e2: Add a full deprecation notice to opinion.300 and culture.350

## 6.0.0

### Major Changes

- 3823490a: - change the visually hidden CSS to conform to the DAC standard. **Note:** this may cause changes to your layout, please ensure that it is not affected after updating to this version

## 5.3.0

### Minor Changes

- 0239822b: Add new colours for specialReportAlt palette

## 5.2.2

### Patch Changes

- 6ea1ce6a: refactoring of internal typography definitions to directly map to a concrete value instead of pulling from an array of values; a general simplification of the typography data file, and of its exports

## 5.2.1

### Patch Changes

- 19f2fb8a: Extends the Typography story so that we better capture changes to the lineHeight of our fonts

## 5.2.0

### Minor Changes

- 4a613b3e: Add new colour 450 to lifestyle palette

### Patch Changes

- 12a9fce5: Update Link hover underline thickness

## 5.1.0

### Minor Changes

- b9cfe856: Add 14px "xsmall" font size to body

### Patch Changes

- 33ce0b3a: Prevent layout jumps when navigating between pages where one has content shorter than the viewport

## 5.0.0

### Major Changes

- 8bd1adce: Update culture and opinion colours for better contrast
- 51f8737e: Change brand[500] colour token
- f6865ac5: update palette.labs.200
- 34ec716d: Update focusHalo colour

### Minor Changes

- 1e129d0b: Add spaced focus halo and apply to buttons

### Patch Changes

- b87baf5c: Replace deprecated colour tokens with palette

## 4.2.1

### Patch Changes

- 393c808d: Update focus colour

## 4.2.0

### Minor Changes

- 777b8d41: Typography constants with IDE hints

### Patch Changes

- ddfac4ac: Add `@deprecated` jsdoc hints so that VS Code will let you know if you use deprecated features.

## 4.1.0

### Minor Changes

- 11da0939: Export palette types as one `palette` object and add colour tokens to Foundations palette doc

## 4.0.3

### Patch Changes

- 71148ecf: Stop publishing packages as single files, so they can be properly tree-shaken.
