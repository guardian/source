# `@guardian/source-react-components-development-kitchen`

[![npm](https://img.shields.io/npm/v/@guardian/source-react-components-development-kitchen)](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)

The Development Kitchen is where new components and patterns can be cooked up, tested and shared. There are minimal acceptance criteria. It’s okay to duplicate and break things. If a Kitchen component proves valuable, it may be promoted to `@guardian/source-react-components`.

## Install

```sh
$ yarn add @guardian/source-react-components-development-kitchen
```

or

```sh
$ npm install @guardian/source-react-components-development-kitchen
```

## Example

```tsx
import { Lines } from '@guardian/source-react-components-development-kitchen';

const Section = () => (
	<>
		<Lines count={8} />
		<Lines effect="squiggly" />
	</>
);
```

## Ownership

Kitchen components are unsupported by CSTI. They are owned by the team or teams consuming them.

Owners are defined in [CODEOWNERS](https://github.com/guardian/source/blob/main/.github/CODEOWNERS).

If you wish to start consuming a Kitchen component, add your team as CODEOWNERS. This ensures you are notified of changes to the component.

## Evolution

Changes to Kitchen components are to be expected. Components in the Kitchen should be considered experimental and likely to change in ways that break things.

Components that prove valuable may be promoted to `@guardian/source-react-components`. In order to achieve this, the component must meet Source’s [acceptance criteria](https://theguardian.design/2a1e5182b/p/11c92e-acceptance-criteria). The best way to meet these is for developers to work in close collaboration with design and UX when building and evolving a component. Components should express some pattern, rule or aspect of design that is governed by Source.

## Motivation

Source is a library where teams can expect to find high quality shared components. Adding new components to Source requires deep work and collaboration across disciplines – design, UX and engineering. It takes a long time and substantial effort for components to land in Source.

Potential contributors are put off contributing directly to Source, as they they find it hard to balance the time investment against their team's priorities. The cost of this is two-fold:

- The number of high quality components available in Source is lower than it could be
- Potentially sharable components are built directly into applications, leading to fragmentation, inconsistency and duplication

We believe there is value in moving quickly, experimenting with new ideas and sharing those ideas for wider input. The Development Kitchen helps teams achieve this by lowering the barrier to entry. It allows teams to get fast feedback on new components, both from users and from other developers.

By providing an agile mechanism for iterating and improving, components can be brought up to the level of quality expected of Source, and everyone can benefit from the work put into them.

## Publishing

The Development Kitchen is published as its own package, independent of the stable components in the `@guardian/source-react-components`. This:

- Allows the Kitchen to move fast.
- Allows us to make frequent breaking changes to the Kitchen whilst preserving semver. The stable library changes at a slower pace, in order to set expectations and preserve developer confidence.
