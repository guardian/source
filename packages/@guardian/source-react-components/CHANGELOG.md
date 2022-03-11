# @guardian/source-react-components

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
