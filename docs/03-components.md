# Components

> Individually installable components.

## Requirements

`react`, `@emotion/core` and `@guardian/src-foundations` are `peerDependencies` of Source components. You must install all of these packages into your application to use Source components.

## Introduction

Components are individually installable as JavaScript packages via NPM or Yarn. Each component package exposes its React components, themes and TypeScript types.

For detailed instructions on specific components, check out the [components overview in the Design System documentation](https://theguardian.design/2a1e5182b/p/77ee17-overview).

Alternatively you can visit the folder for the component under [`src/core/components`](../src/core/components).

## Example usage

### Install

To install the [Button](https://theguardian.design/2a1e5182b/p/435225-button/b/86f344) component:

```shell
$ yarn add @guardian/src-button
```

### Use

Import the Button component. Visit the [API documentation](https://theguardian.design/2a1e5182b/p/435225-button/b/38466d) for more details.

```jsx
import { Button } from '@guardian/src-button';

const Form = () => (
    <form>
        <Button>Click me</Button>
    </form>
);
```

