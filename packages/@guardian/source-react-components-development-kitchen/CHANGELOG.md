# @guardian/source-react-components-development-kitchen

## 7.0.0

### Major Changes

- f83640ca: Visually hide StarRating's <figcaption> element

### Minor Changes

- f83640ca: Remove aria-role=complementary from StarRating

### Patch Changes

- 28af724b: The expanding wrapper should manage the tabIndex of child nodes when the wrapper is collapsed
- f83640ca: Change StarRating caption for 0 stars from 'zero star' to 'zero stars'

## 6.1.2

### Patch Changes

- fada52db: Add theming and a dark theme to the Expanding Wrapper

## 6.1.1

### Patch Changes

- c6e1a9b9: Export the Expanding Wrapper

## 6.1.0

### Minor Changes

- febd9d2c: Adds an expanding wrapper component

## 6.0.3

### Patch Changes

- 11333bf1: fix issue with error and success state display on NumericInput component

## 6.0.2

### Patch Changes

- 1143ed83: Fix bug with `ToggleSwitch` useEffect browser check

## 6.0.1

### Patch Changes

- 1f218bf6: Update focus styles for `ToggleSwitch`

## 6.0.0

### Major Changes

- aa4c2caa: Bump @guardian/libs to `^9.0.0`

## 5.0.0

### Major Changes

- Updated `peerDependencies` [905c5148]
  - @guardian/source-foundations@7.0.0
  - @guardian/source-react-components@9.0.0
- d9e94ef1: `ToggleSwitch` no longer contains iOS and Android versions
  - adds a new `ToggleSwitchApps` component to use instead
- 7b99c758:
  - passing a `format` prop to `ToggleSwitch` renders an alternative colour scheme suitable for use on coloured backgrounds
  - `FontWeight` in `ToggleSwitch` is now limited to `regular` and `bold` and controlled via a `fontWeight` prop
  - `FontSize` in `ToggleSwitch` is now limited to `small` and regular and controlled via a `fontSize` prop
  - adds a new `labelBorder` prop to `ToggleSwitch`
- 676f6f07: Removes unused 'tooltip' prop from `ToggleSwitch` component.

### Minor Changes

- 4cdc3016: Add `NumericInput` component.

### Patch Changes

- 2010337c: Show a focus ring when tabbing to a `ToggleSwitch`

## 4.0.1

### Patch Changes

- 40e41a43: **No changes**: Patch bump to fix deploy to npm due to the major version already having been published and deleted

## 4.0.0

### Patch Changes

- Updated dependencies [3823490a]
  - @guardian/source-foundations@6.0.0
  - @guardian/source-react-components@8.0.0

## 3.1.10

### Patch Changes

- bbbe1e3e: make BackToTop an explicit export of source-react-components so it can be used in the FooterWithContents dev kitchen component

## 3.1.9

### Patch Changes

- 4ef91d3c: noop - ignore this

## 3.1.8

### Patch Changes

- e1524b0b: noop - ignore this safely

## 3.1.7

### Patch Changes

- 6e1958c7: Noop - this can be ignored

## 3.1.6

### Patch Changes

- e45b80b1: noop to test release - you can ignore this

## 3.1.5

### Patch Changes

- e6d86ab6: noop to test release again - you can ignore this release

## 3.1.4

### Patch Changes

- f4522bd4: noop to test release again - you can ignore this release

## 3.1.3

### Patch Changes

- e3a3c742: noop to test releases – you can ignore this version

## 3.1.2

### Patch Changes

- 6ff6fede: noop to test pipeline - ignore this release

## 3.1.1

### Patch Changes

- 430276ce: Noop to test release pipeline

## 3.1.0

### Minor Changes

- c7afdedb: add FooterWithContents and FooterLinks components

## 3.0.0

### Patch Changes

- Updated dependencies [12a9fce5]
- Updated dependencies [8e8535ba]
  - @guardian/source-react-components@7.0.0

## 2.0.0

### Patch Changes

- Updated dependencies [07bfaf1b]
- Updated dependencies [78ff24be]
- Updated dependencies [fd69cf60]
  - @guardian/source-react-components@6.0.0

## 1.0.1

### Patch Changes

- 32ca5c1e: Add tooltip to ToggleSwitch

## 1.0.0

Contributions to this package have stabilised, and the release process seems like it will fit a standard semver pattern.

So to accompany the major version releases to its peer deps, the dev kitchen is also moving to v1.

### Patch Changes

- Updated dependencies [b87baf5c]
- Updated dependencies [94a6de68]
- Updated dependencies [1e129d0b]
- Updated dependencies [d55bc4b6]
- Updated dependencies [ef458f83]
- Updated dependencies [8bd1adce]
- Updated dependencies [a5a14a49]
- Updated dependencies [51f8737e]
- Updated dependencies [f6865ac5]
- Updated dependencies [c37e5be9]
- Updated dependencies [34ec716d]
  - @guardian/source-foundations@5.0.0
  - @guardian/source-react-components@5.0.0

## 0.0.36

### Patch Changes

- 0dc5d08e: Empty release to test release process

## 0.0.35

### Patch Changes

- 56471081: Use an SVG to render straight lines, too.
- 96510c75: StarRating uses pure SVG instead of a background-image.
- 56471081: Drop the background-image repeating css rules in favour of pure SVG patterns that can fill up to our largest breakpoint of 1300px.

## 0.0.34

### Patch Changes

- 0e938355: Add optional id prop on ToggleSwitch
- 742bd7c2: Add optional LabelPosition prop to Toggle Switch

## 0.0.33

### Patch Changes

- 7fbe272a: Remove margin from ToggleSwitch component

## 0.0.32

### Patch Changes

- 45d4d8df: React minimum version is 17.0.1 (instead of 17.0.0)
- 71148ecf: Stop publishing packages as single files, so they can be properly tree-shaken.
- 5935b4fe: Fixes styling on toggle switch and adds clickable label
- Updated dependencies [45d4d8df]
- Updated dependencies [71148ecf]
  - @guardian/source-react-components@4.0.2
  - @guardian/source-foundations@4.0.3

## 0.0.31

### Patch Changes

- 29b6a907: No-op to test changesets again

## 0.0.30

### Patch Changes

- c0967fb6: No-op to test changesets
