# `@guardian/source-react-components`

[![npm](https://img.shields.io/npm/v/@guardian/source-react-components)](https://www.npmjs.com/package/@guardian/source-react-components)

A set of robust, accessible React components built using `@guardian/source-foundations`.

## Install

```sh
$ yarn add @guardian/source-react-components
```

or

```sh
$ npm install @guardian/source-react-components
```

> You must install `react`, `@emotion/react` and `@guardian/source-foundations` to use Source components.

## Example

```tsx
import { TextInput, Button } from '@guardian/source-react-components';

const Form = () => (
    <form>
        <TextInput label="First name" />
        <Button>Submit</Button>
    </form>
);
```
