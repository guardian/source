# @guardian/source-foundations

## 6.0.0

### Major Changes

- 3e30b6e7: Set default textSans line height to 'regular', there should be no change to Source components but any consumers using textSans should expect a default line height of 1.35 rather than 1.5

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
