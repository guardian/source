# `@guardian/source-react-components`

[![npm](https://img.shields.io/npm/v/@guardian/source-react-components)](https://www.npmjs.com/package/@guardian/source-react-components)

Components are individually installable as JavaScript packages via NPM or Yarn. Each component package exposes its React components, themes and TypeScript types.

## Install

```sh
$ yarn add @guardian/source-react-components
```

or

```sh
$ npm install @guardian/source-react-components
```

## Use

```tsx
import { TextInput, Button } from '@guardian/source-react-components';

const Form = () => (
    <form>
        <TextInput label="First name" />
        <Button>Submit</Button>
    </>
);
```
