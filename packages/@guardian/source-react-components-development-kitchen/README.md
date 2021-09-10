# Development Kitchen :fried_egg:

The development kitchen is where new components and patterns can be cooked up, tested and shared. There are minimal acceptance criteria. It’s okay to duplicate and break things. If a kitchen component proves valuable, its status may be updated to stable and it will move out of the kitchen.

The Development Kitchen is a new concept which we hope to improve over time. If you have anything questions or feedback, please contribute to the [discussion](https://github.com/guardian/source/discussions/833).

## Install

```sh
$ yarn add @guardian/source-react-components-development-kitchen
```

or

```sh
$ npm install @guardian/source-react-components-development-kitchen
```

## Use

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

Kitchen components are unsupported by CSTI and owned by the team or teams consuming them. We don’t recommend individual contributors taking ownership of a component, as an individual may change teams, leave the company or otherwise become less inclined to support it.

Owners are defined in the [CODEOWNERS](https://github.com/guardian/source/blob/main/.github/CODEOWNERS) file in the GitHub repo.

Changes to components should be coordinated with their owners.

## Evolution

Changes to kitchen components are to be expected. Components in the kitchen should be considered experimental and likely to change in ways that break things.

Owners of kitchen components have visibility over where they are currently being used. Owners should notify consumers of their component that changes are being considered, to ensure everyone is kept in the loop. This could happen at the pull request stage.

Components that are valuable may be promoted to stable. In order to achieve this, the component must meet Source’s [acceptance criteria](https://theguardian.design/2a1e5182b/p/11c92e-acceptance-criteria). The best way to meet these is for developers to work in close collaboration with design and UX when building and evolving a component. Not all code components have an equivalent in Figma, but components should express some pattern, rule or aspect of design that is governed by Source.

## Motivation

Source is a library where teams can expect to find shared components. Adding new components to Source requires a lot of deep thought and collaboration across disciplines (design, UX, engineering) and a lot of work to ensure they are high quality. As such it takes a long time and a lot of effort for components to land in Source. Potential contributors are put off contributing directly to Source, as they they find it hard balance the time investment against their team's priorities. The cost of this is two-fold:

-   The number of high quality components available in Source is lower than it could be
-   Potentially sharable components are built directly into applications, leading to fragmentation, inconsistency and duplication

We believe there is value in moving quickly, experimenting with new ideas and sharing those ideas for wider input and that the Development Kitchen will help teams achieve this by lowering the barrier to entry. It will allow teams to get fast feedback on new components, both from users and from other developers.

By providing an agile mechanism for iterating and improving, components can be brought up to the level of quality expected of Source components and everyone can benefit from the work put into them.

## Publishing

The Development Kitchen is published as its own package, independent of the stable components in the `@guardian/src-*` packages. This:

-   Allows the kitchen to move faster than stable
-   Allows us to make frequent breaking changes while preserving semver. The kitchen can often release new major versions, whereas with the stable library it is desirable for major versions to change at a slower pace, in order to set expectations and preserve developer confidence.
