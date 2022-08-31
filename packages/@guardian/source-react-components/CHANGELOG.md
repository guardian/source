# @guardian/source-react-components

## 8.0.0

### Major Changes

- 175e8dcf: Bump dev dependencies

## 7.0.0

### Major Changes

- 8e8535ba: Update Select border colour

### Patch Changes

- 12a9fce5: Update Link hover underline thickness

## 6.0.0

### Major Changes

- 07bfaf1b: Update default border colour for TextInput and TextArea

### Minor Changes

- fd69cf60: add newsletter icon

### Patch Changes

- 78ff24be: Add documentation note about `AccordionRow`'s `max-height`

## 5.0.0

### Major Changes

- 94a6de68: Improve Link/ButtonLink accessibility
- 1e129d0b: Add spaced focus halo and apply to buttons
- d55bc4b6: Change underline on subdued Button
- ef458f83: Increase spacing between choice cards and label
- a5a14a49: Improve accessibility of unselected state of ChoiceCard
- c37e5be9: Improve accessibility of unselected state of checkbox

### Patch Changes

- b87baf5c: Replace deprecated colour tokens with palette
- Updated dependencies [b87baf5c]
- Updated dependencies [1e129d0b]
- Updated dependencies [8bd1adce]
- Updated dependencies [51f8737e]
- Updated dependencies [f6865ac5]
- Updated dependencies [34ec716d]
  - @guardian/source-foundations@5.0.0

## 4.4.0

### Minor Changes

- a90b69a2: Add Guardian Best Website Logo
- 8f401873: Fetch icon SVG markup from Figma, expose new icons

## 4.3.1

### Patch Changes

- 825e71e1: move legacy icon exports to `deprecated-exports`
- 44816e06: Move deprecated exports to their own file, and export them from there.

  This just keeps things cleaner internally.

## 4.3.0

### Minor Changes

- ecd0969c: expose spinner icon from components index

### Patch Changes

- 65049d62: Accessibility improvements to form components
- d9bcb118: Add an icons svg folder and svgs for all icons
- 8a13ceeb: Expose new icon names
- ddfac4ac: Add `@deprecated` jsdoc hints so that VS Code will let you know if you use deprecated features.

## 4.2.0

### Minor Changes

- 44f78769: Add pinned SVG icon
- b1240d34: Add screen reader accessible labels to logo icons

## 4.1.1

### Patch Changes

- 9001d7b2: Add alert role to inline user feedback components

## 4.1.0

### Minor Changes

- 7305e4ca: Adds an `isLoading` prop to the Button component. This replaces any icon rendered on the button with a spinner (`SvgSpinner`). The spinner will have colours that match the background and text colours of the button. The Button `disabled` state is also extended to show a `not-allowed` cursor so that the disabled state is indicated visually"

### Patch Changes

- 13a0f399: Remove aria-checked attributes from ChoiceCard, Checkbox and Radio components

## 4.0.3

### Patch Changes

- 11da0939: Export palette types as one `palette` object and add colour tokens to Foundations palette doc

## 4.0.2

### Patch Changes

- 45d4d8df: React minimum version is 17.0.1 (instead of 17.0.0)
- 71148ecf: Stop publishing packages as single files, so they can be properly tree-shaken.
- Updated dependencies [71148ecf]
  - @guardian/source-foundations@4.0.3
