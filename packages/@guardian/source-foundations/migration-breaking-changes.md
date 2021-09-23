# Breaking changes

## `@guardian/source-foundations`

-   Removed `palette` object
-   Removed `@guardian/src-foundations/theme` path

## `@guardian/source-foundations/accessibility`

-   All exports moved to root. Path removed

## `@guardian/source-foundations/animation`

-   All exports moved to root. Path removed

## `@guardian/source-foundations/breakpoints`

-   All exports moved to root. Path removed
-   `Breakpoint` is now exported as a type

## `@guardian/source-foundations/mq`

-   All exports moved to root. Path removed
-   No longer re-exports `breakpoints` and `Breakpoint` from `breakpoints.ts`

## `@guardian/source-foundations/palette`

-   All exports moved to root. Path removed

## `@guardian/source-foundations/size`

-   All exports moved to root. Path removed
-   Removed `remSize` and `remIconSize` exports (previously available from `@guardian/src-foundations/size/global`)

## `@guardian/source-foundations/space`

-   All exports moved to root. Path removed

## `@guardian/source-foundations/typography`

-   All non-index exports removed (e.g. @guardian/src-foundations/typography/fs)
-   All other exports moved to root. Path removed
-   Remove `@guardian/src-foundations/typography/obj` path. All differing exports now available from root with `ObjectStyles` suffix (e.g. `headlineObjectStyles`)

## `@guardian/source-foundations/themes`

-   All exports to be moved to their respective components. Path removed

## `@guardian/source-foundations/utils`

-   All exports moved to root. Path removed
-   Removed `InteractionModeEngine` export (previously available from `@guardian/src-foundations/utils/focus-style-manager`)
