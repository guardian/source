# Utilities

## Install

```sh
$ yarn add @guardian/src-utilities
```

## Focus manager

Providing a clear focus state (the blue halo effect around active elements) is essential to support keyboard navigation. It is less important, and arguably distracting, for mouse users.

Source provides a utility that manages the appearance of focus styles. When enabled, focus styles will be hidden while the user interacts using the mouse. They will appear when the tab key is pressed to begin keyboard navigation.

You must explictly enable this feature in your app (and you probably want to):

```js
import { FocusStyleManager } from "@guardian/src-utilities"

FocusStyleManager.onlyShowFocusOnTabs()
```
